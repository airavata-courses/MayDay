import app from './app';
import ZookeeperClient from '../zookeeper_client/zk_client';
import { OptionList, Content } from 'command-line-usage';
import commandLineUsage = require('command-line-usage');
import { OptionDefinition } from 'command-line-args';
import commandLineArgs = require('command-line-args');

const cmdOptions: OptionDefinition[] = [
    { name: 'port', type: Number, multiple: false, defaultValue: 3000 },
    { name: 'zkservers', type: String, multiple: true },
    { name: 'help', type: String }
];

const sections: (OptionList | Content)[] = [
    {
      header: 'Purple Microservice',
      content: 'Gateway to external APIs'
    },
    {
      header: 'Options',
      optionList : cmdOptions
    }
  ] 
const usage = commandLineUsage(sections)

const options = commandLineArgs(cmdOptions, {partial: true});
if (options['--help']) {
    console.log(usage);
    process.exit(0);
}

const PORT: number = options['port'];
if(options['zkservers']) {
    const ZKSERVERS: string[] = options['zkservers'];
    const zk = new ZookeeperClient(ZKSERVERS, '/purpleznode1');
    zk.connectToEnsemble();   
}


app.listen(PORT,() => {
    console.log('Purple listening on port ' + PORT);
});