import app from './app';
//mport ZookeeperClient from '../zookeeper_client/zk_client';

const PORT: number = Number(process.argv[2]) || 3000;
//new ZookeeperClient(['localhost:2181'], '/testpath2').connectToEnsemble();
app.listen(PORT,() => {
    console.log('Purple listening on port ' + PORT);
});