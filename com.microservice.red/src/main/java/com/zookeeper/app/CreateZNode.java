package com.zookeeper.app;

import org.apache.zookeeper.CreateMode;
import org.apache.zookeeper.KeeperException;
import org.apache.zookeeper.ZooDefs.Ids;
import org.apache.zookeeper.ZooKeeper;

public class CreateZNode {
	/**
	 * 
	 */

	private static ZooKeeper zk;
	
	public CreateZNode(ZooKeeper zk) {
		this.zk = zk;
	}

	public void create(String path, byte[] data) throws Exception {
		if(zk == null) {
			throw new Exception("zookeeper Object is nbull");
		}
		zk.create(path, data, Ids.OPEN_ACL_UNSAFE, CreateMode.EPHEMERAL_SEQUENTIAL);
	}

	/*
	 * public static void main(String[] args) throws IllegalStateException,
	 * IOException, InterruptedException, KeeperException { String path = "/RED";
	 * System.out.println(InetAddress.getLocalHost().getHostAddress());
	 * 
	 * byte[] data = InetAddress.getLocalHost().getHostAddress().getBytes();
	 * 
	 * ZkConnector zkc = new ZkConnector();
	 * 
	 * zk = zkc.connect("localhost");
	 * 
	 * create(path, data);
	 * 
	 * }
	 */

}
