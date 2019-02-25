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

				a.setUser_id(rs.getInt("user_id"));
				a.setEmail(rs.getString("email"));
				a.setName(rs.getString("name"));
				a.setPassword(rs.getString("password"));
				a.setAddress(rs.getString("address"));
				a.setZipcode(rs.getInt("zipcode"));
				a.setLatitude(rs.getFloat("latitude"));
				a.setLongitude(rs.getFloat("longitude"));
				a.setImage_url(rs.getString("image_url"));
				a.setLogged_in(rs.getBoolean("logged_in"));
				a.setLast_login(rs.getDate("last_login"));

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
				a.setUser_id(rs.getInt("user_id"));
				a.setEmail(rs.getString("email"));
				a.setName(rs.getString("name"));
				a.setPassword(rs.getString("password"));
				a.setAddress(rs.getString("address"));
				a.setZipcode(rs.getInt("zipcode"));
				a.setLatitude(rs.getFloat("latitude"));
				a.setLongitude(rs.getFloat("longitude"));
				a.setImage_url(rs.getString("image_url"));
				a.setLogged_in(rs.getBoolean("logged_in"));
				a.setLast_login(rs.getDate("last_login"));

			}
		} catch (Exception e) {
			e.printStackTrace();
			;
		}

		return a;
	}

	public void create(person a1) {
		String sql = "insert into person (user_id, email, name, password, address, zipcode, latitude, longitude, image_url, logged_in, last_login) values (?,?,?,?,?,?,?,?,?,?,CURRENT_TIMESTAMP());";
		try {
			PreparedStatement st = con.prepareStatement(sql);
			st.setInt(1, a1.getUser_id());
			st.setString(2, a1.getEmail());
			st.setString(3, a1.getName());
			st.setString(4, a1.getPassword());
			st.setString(5, a1.getAddress());
			st.setInt(6, a1.getZipcode());
			st.setFloat(7, a1.getLatitude());
			st.setFloat(8, a1.getLongitude());
			st.setString(9, a1.getImage_url());
			st.setBoolean(10, a1.isLogged_in());
			st.executeUpdate();
			con.commit();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public void update(person a1) {
		String sql = "update person set name=? , email=? where user_id=? ";
		try {
			PreparedStatement st = con.prepareStatement(sql);
			st.setInt(1, a1.getUser_id());
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
