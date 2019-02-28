package com.microservice.red;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;
import org.json.simple.JSONObject;


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
	@Path("customer/{email}")
	@Produces({MediaType.APPLICATION_JSON,MediaType.APPLICATION_XML})
	public person getperson(@QueryParam("email") String email)
	{
		System.out.println(repo.getperson(email));
		return repo.getperson(email);
	}
	
	@POST
	@Path("customer")
	public person createperson(person a1)
	{
		System.out.println(a1);
		repo.create(a1);
		
		return a1;
	}
	
	@POST
	@Path("askLogin")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response askLogin(person p) {
	    person pdb;
	    pdb = repo.getperson(p.getEmail());
	    if (pdb.getEmail() == null) {
	    	JSONObject obj = new JSONObject();
	    	obj.put("login", "failed");
	    	return Response.status(Status.OK).entity(obj.toJSONString()).build();
	    }
	    else if (p.getPassword().equals(pdb.getPassword())) {
	    	JSONObject obj = new JSONObject();
	    	obj.put("login", "success");
	    	obj.put("last_login", pdb.getLast_login());
	    	obj.put("image_url", pdb.getImage_url());
	    	return Response.status(Status.OK).entity(obj.toJSONString()).build();
	    }
	    JSONObject obj = new JSONObject();
    	obj.put("login", "failed");
	    return Response.status(Status.OK).entity(obj.toJSONString()).build();
	}
	
	@PUT
	@Path("customer")
	public person updateperson(person a1)
	{
		System.out.println(a1);
		
		if(repo.getperson(a1.getEmail()).getEmail()== null)
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
	@Path("customer/{email}")
	public person killperson(@QueryParam("email") String email)
	{
		person a=repo.getperson(email);
		
		if(a.getEmail()!=null)
			repo.delete(email);
		
		return a;
	}
	
}
