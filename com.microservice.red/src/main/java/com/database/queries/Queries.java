package com.database.queries;

public class Queries {

	public static final String PERSONSCHEMA = new StringBuilder()
			.append("CREATE TABLE person (")
			.append("email VARCHAR(50),")
			.append("name VARCHAR(50),")
			.append("password VARCHAR(50),")
			.append("address VARCHAR(50),")
			.append("zipcode INT,")
			.append("latitude NUMBER,")
			.append("longitude NUMBER,")
			.append("image_url VARCHAR(50),")
			.append("logged_in INT,")
			.append("last_login DATE,")
			.append("user_id NUMBER")
			.append(")").toString();
	
	public static final String PERSONSCHEMACLEANUP = "DROP TABLE IF EXISTS person";
	
	public static final String PERSONMOCKDATA = new StringBuilder()
			.append("INSERT INTO public.person VALUES (")
			.append("'o',")
			.append("'shashank',")
			.append("'ss1',")
			.append("'ssds',")
			.append("47401,")
			.append("10,")
			.append("20,")
			.append("'http://ola',")
			.append("0,")
			.append("'2019-02-01',")
			.append("101")
			.append(")")
			.toString();
}
