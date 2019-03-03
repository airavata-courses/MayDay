package com.zookeeper.app;

import java.io.IOException;
import java.net.InetAddress;
import java.net.UnknownHostException;

import javax.servlet.http.HttpServlet;

import org.apache.zookeeper.KeeperException;
import org.apache.zookeeper.ZooKeeper;

public class ZookeeperManager extends HttpServlet {

	private ZkConnector zkc;
	@Override
	public void init() {
		
		String zkServer = System.getProperty("zkserver");
		if (zkServer == null) {
			return;
		}
		zkc = new ZkConnector();
		ZooKeeper zk = null;
		try {
			zk = zkc. connect(zkServer);
		} catch (IllegalStateException | IOException | InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		String path = "/RED";
		byte[] data = "test".getBytes();
		try {
			data = InetAddress.getLocalHost().getHostAddress().getBytes();
		} catch (UnknownHostException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		CreateZNode czn = new CreateZNode(zk);
		try {
			czn.create(path, data);
		} catch (KeeperException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}
}
