
import {join as loJoin} from 'lodash';
import { createClient, CreateMode, Option, Client } from 'node-zookeeper-client';

export default class ZookeeperClient {
  
    zk_client: Client;
    zNodePath: string;
    zkConnectionString: string[];
    clientOptions: Option;
    constructor(zkConnectionString: string[], zNodePath: string) {
        this.zkConnectionString = zkConnectionString;
        this.zNodePath = zNodePath;
        this.clientOptions = {
            retries: 1,
            sessionTimeout: 2000,
            spinDelay: 500
        }
        this.zk_client = createClient(loJoin(zkConnectionString, ','), this.clientOptions);
    }

    createNode() {
        this.zk_client.create(this.zNodePath, CreateMode.EPHEMERAL_SEQUENTIAL, (error: Error) => {
            if(error) {
                console.log("can't create path: ",error);
            } else {
                console.log('connected to znode ', this.zNodePath);
            }
            //this.zk_client.close();
        });
    }

    connectToEnsemble() {
        this.zk_client.once('connected', () => {
            console.log('Connected to the zookeper server.');
            this.createNode();
        });

        this.zk_client.connect();
    }
}
