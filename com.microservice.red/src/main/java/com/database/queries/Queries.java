package com.database.queries;

public class Queries {

	public static final String PERSONSCHEMA = new StringBuilder()
			.append("CREATE TABLE IF NOT EXISTS person (")
			.append("email VARCHAR(50),")
			.append("name VARCHAR(50),")
			.append("password VARCHAR(50)")
			.append(")").toString();
	
	//public static final String PERSONSCHEMACLEANUP = "DROP TABLE IF EXISTS person";
	
	public static final String PERSONMOCKDATA = new StringBuilder()
			.append("INSERT INTO person VALUES (")
			.append("'o',")
			.append("'shashank',")
			.append("'ss1',")
			.append(")")
			.toString();
}
