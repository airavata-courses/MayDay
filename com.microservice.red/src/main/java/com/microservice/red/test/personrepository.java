package com.microservice.red.test;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;


public class personrepository {

	Connection con=null;
	
	public personrepository()
	{
		String url = "jdbc:mysql://localhost:3306/restdb";
		String username = "root";
		String password = "sqlmypass78!";
		try
		{
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection(url,username,password);
		}
		catch(Exception e) {
			e.printStackTrace();
		}
	}
	
	public List<person> getpersons()
	{
		List<person> persons = new ArrayList<>();
		String sql="select * from person";
		try 
		{
			Statement st = con.createStatement();
			ResultSet rs = st.executeQuery(sql);
			while(rs.next())
			{
				person a = new person();
				
				a.setUser_id(rs.getInt(1));
				a.setEmail(rs.getString(2));
				a.setName(rs.getString(3));
				a.setPassword(rs.getString(4));
				a.setAddress(rs.getString(5));
				a.setZipcode(rs.getInt(6));
				a.setLatitude(rs.getFloat(7));
				a.setLongitude(rs.getFloat(8));
				a.setImage_url(rs.getString(9));
				a.setLogged_in(rs.getBoolean(10));
				a.setLast_login(rs.getDate(11));
				
				persons.add(a);
			}
		}
		catch(Exception e)
		{
				e.printStackTrace();
		}
		return persons;
	}
	
	public person getperson(int id)
	{
		String sql="select * from person where user_id="+id;
		person a = new person();
		try 
		{
			Statement st = con.createStatement();
			ResultSet rs = st.executeQuery(sql);
			
			if(rs.next())
			{
				System.out.println("result - "+rs.getString(4));
				a.setUser_id(rs.getInt(1));
				a.setEmail(rs.getString(2));
				a.setName(rs.getString(3));
				a.setPassword(rs.getString(4));
				a.setAddress(rs.getString(5));
				a.setZipcode(rs.getInt(6));
				a.setLatitude(rs.getFloat(7));
				a.setLongitude(rs.getFloat(8));
				a.setImage_url(rs.getString(9));
				a.setLogged_in(rs.getBoolean(10));
				a.setLast_login(rs.getDate(11));

			}
		}
		catch(Exception e)
			{
				e.printStackTrace();;
			}
		
		return a;
	}

	public void create(person a1) {
		String sql = "insert into person values (?,?,?,?,?,?,?,?,?,?,CURRENT_TIMESTAMP())";
		try 
		{
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
//			st.setDate(11, a1.getLast_login());
			st.executeUpdate();
			
		}
		catch(Exception e)
			{
				e.printStackTrace();
			}
	}
	
	public void update(person a1) {
		String sql = "update person set name=? , email=? where id=? ";
		try 
		{
			PreparedStatement st = con.prepareStatement(sql);
			st.setInt(1, a1.getUser_id());
			st.setString(2, a1.getEmail());
			st.setString(3, a1.getName());
			st.executeUpdate();
			
		}
		catch(Exception e)
			{
				e.printStackTrace();
			}
	}

	public void delete(int id) {
		String sql = "delete from person where id=? ";
		try 
		{
			PreparedStatement st = con.prepareStatement(sql);
			st.setInt(1,id);
			st.executeUpdate();
			
		}
		catch(Exception e)
			{
				e.printStackTrace();
			}
		
	}
}



