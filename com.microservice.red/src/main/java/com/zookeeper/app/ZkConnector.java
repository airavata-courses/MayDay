package com.zookeeper.app;

import java.io.IOException;
import java.net.InetAddress;
import java.net.UnknownHostException;

import javax.servlet.http.HttpServlet;

import org.apache.zookeeper.KeeperException;
import org.apache.zookeeper.WatchedEvent;
import org.apache.zookeeper.Watcher;
import org.apache.zookeeper.Watcher.Event.KeeperState;
import org.apache.zookeeper.ZooKeeper;

public class ZkConnector{

	private ZooKeeper zk;
	
	//zookeeper instance to access Zookeeper
	private java.util.concurrent.CountDownLatch connSignal = new java.util.concurrent.CountDownLatch(1);
	
	
	//Method to connect to Zookeeper
	public ZooKeeper connect(String host) throws IOException, InterruptedException, IllegalStateException{
		zk = new ZooKeeper(host, 5000, new Watcher() {
										public void process(WatchedEvent event) {
											if(event.getState() == KeeperState.SyncConnected) {
												connSignal.countDown();
											}
										}
		});
		connSignal.await();
		return zk;
	}
	public void close() throws InterruptedException {
		zk.close();
	}
	
	
}
