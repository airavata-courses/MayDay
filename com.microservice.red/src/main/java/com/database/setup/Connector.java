package com.database.setup;

import java.io.InputStreamReader;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

import org.eclipse.persistence.platform.database.H2Platform;

import com.database.queries.Queries;

public class Connector {

	private String CSTRING = "jdbc:h2:./userdb";
	private String USERNAME = "root";
	private String PASSWORD = "root";
	public Connection connection;
	
	public Connector() {
		
		try {
			Class.forName("org.h2.Driver");
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}
		try {
			connection = DriverManager.getConnection(CSTRING);
			connection.setAutoCommit(true);
		} catch (SQLException e) {
			e.printStackTrace();
		}
		runSchema();
	}
	
	public Connection getConnection() {
		return this.connection;
	}
	
	private void runSchema() {
		try {
			Statement stmt = connection.createStatement();
			stmt.executeUpdate(Queries.PERSONSCHEMACLEANUP);
			stmt.executeUpdate(Queries.PERSONSCHEMA);
			//stmt.execute(Queries.PERSONMOCKDATA);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
