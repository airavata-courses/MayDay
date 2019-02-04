package com.microservice.red.test;

import java.util.Arrays;
import java.util.List;

import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("customers")
public class personresource {

	personrepository repo = new personrepository();
	
	@GET
	@Produces({MediaType.APPLICATION_JSON,MediaType.APPLICATION_XML})
	public List<person> getpersons()
	{
		System.out.println("getpersons Function called!");
		
		return repo.getpersons();
	}

	@GET
	@Path("customer/{id}")
	@Produces({MediaType.APPLICATION_JSON,MediaType.APPLICATION_XML})
	public person getperson(@PathParam("id") int id)
	{
		return repo.getperson(id);
	}
	
	@POST
	@Path("customer")
	public person createperson(person a1)
	{
		System.out.println(a1);
		repo.create(a1);
		
		return a1;
	}
	
	@PUT
	@Path("customer")
	public person updateperson(person a1)
	{
		System.out.println(a1);
		
		if(repo.getperson(a1.getUser_id()).getUser_id()==0)
		{
			repo.create(a1);
		}
		else
		{
			repo.update(a1);
		}
		return a1;
	}
	
	@DELETE
	@Path("customer/{id}")
	public person killperson(@PathParam("id") int id)
	{
		person a=repo.getperson(id);
		
		if(a.getUser_id()!=0)
			repo.delete(id);
		
		return a;
	}
	
}
