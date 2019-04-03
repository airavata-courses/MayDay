package com.database.setup;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Properties;

public class Connector {

	private String CSTRING = "jdbc:postgresql://149.165.170.219:5432/sanjeevnidb";
	private String USERNAME = "postgres";
	private String PASSWORD = "password123";
	public Connection connection;

	public Connector() {
		Properties props = new Properties();
		props.setProperty("user", USERNAME);
		props.setProperty("password", PASSWORD);

		try {
			Class.forName("org.postgresql.Driver");
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}
		try {
			connection = DriverManager.getConnection(CSTRING, props);
			connection.setAutoCommit(true);
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}

	public Connection getConnection() {
		return this.connection;
	}
}
