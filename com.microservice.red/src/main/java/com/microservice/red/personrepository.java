package com.microservice.red;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import com.database.setup.Connector;

public class personrepository {

	static Connection con = new Connector().getConnection();

	public personrepository() {
	}

	public List<person> getpersons() {
		List<person> persons = new ArrayList<>();
		String sql = "select * from person";
		try {
			Statement st = con.createStatement();
			ResultSet rs = st.executeQuery(sql);
			while (rs.next()) {
				person a = new person();

				a.setEmail(rs.getString("email"));
				a.setName(rs.getString("name"));
				a.setPassword(rs.getString("password"));
				persons.add(a);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return persons;
	}

	public person getperson(String email) {
		String sql = "select * from person where email='" + email + "'";
		person a = new person();
		try {
			Statement st = con.createStatement();
			ResultSet rs = st.executeQuery(sql);

			if (rs.next()) {
				a.setEmail(rs.getString("email"));
				a.setName(rs.getString("name"));
				a.setPassword(rs.getString("password"));

			}
		} catch (Exception e) {
			e.printStackTrace();
			;
		}

		return a;
	}

	public boolean create(person a1) {
		int status = 0;
		String sql = "insert into person (email, name, password) values (?,?,?)";
		try {
			PreparedStatement st = con.prepareStatement(sql);
			st.setString(1, a1.getEmail());
			st.setString(2, a1.getName());
			st.setString(3, a1.getPassword());
			status = st.executeUpdate();
		} catch (Exception e) {
			e.printStackTrace();
			status = 0;
		}
		return status !=0;
		
	}

	public void update(person a1) {
		String sql = "update person set name=? WHERE email=?";
		try {
			PreparedStatement st = con.prepareStatement(sql);
			st.setString(2, a1.getEmail());
			st.setString(3, a1.getName());
			st.executeUpdate();

		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public void delete(String email) {
		String sql = "delete from person where email=? ";
		try {
			PreparedStatement st = con.prepareStatement(sql);
			st.setString(1, email);
			st.executeUpdate();

		} catch (Exception e) {
			e.printStackTrace();
		}

	}
}
