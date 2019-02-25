package com.microservice.red;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
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
	@Produces(MediaType.APPLICATION_JSON)
	public List<person> getpersons() {
		return repo.getpersons();
	}

	@GET
	@Path("customer/{email}")
	@Produces(MediaType.APPLICATION_JSON)
	public person getperson(@QueryParam("email") String email) {
		return repo.getperson(email);
	}

	@POST
	@Path("customer")
	public void createperson(person a1) {
		repo.create(a1);

	}

	@POST
	@Path("askLogin")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response askLogin(person p) {
		person pdb;
		pdb = repo.getperson(p.getEmail());
		if (pdb.getEmail() == null) {
			JSONObject obj = new JSONObject();
			obj.put("login", "failed");
			return Response.status(Status.OK).entity(obj.toJSONString()).build();
		} else if (p.getPassword().equals(pdb.getPassword())) {
			JSONObject obj = new JSONObject();
			obj.put("login", "success");
			obj.put("last_login", pdb.getLast_login().toString());
			obj.put("image_url", pdb.getImage_url());
			return Response.status(Status.OK).entity(obj.toJSONString()).build();
		}
		JSONObject obj = new JSONObject();
		obj.put("login", "failed");
		return Response.status(Status.OK).entity(obj.toJSONString()).build();
	}

	@PUT
	@Path("customer")
	public void updateperson(person a1) {
		if (repo.getperson(a1.getEmail()).getEmail() == null) {
			repo.create(a1);
		} else {
			repo.update(a1);
		}
	}

	@DELETE
	@Path("customer/{email}")
	public void killperson(@QueryParam("email") String email) {
		if(email == null) {
			return;
		}
		repo.delete(email);
	}

}
