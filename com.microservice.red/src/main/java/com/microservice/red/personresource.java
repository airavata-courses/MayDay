package com.microservice.red;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
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

import org.glassfish.jersey.media.multipart.FormDataContentDisposition;
import org.glassfish.jersey.media.multipart.FormDataParam;
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
	@Produces(MediaType.APPLICATION_JSON)
	public Response createperson(person a1) {
		JSONObject obj = new JSONObject();
		if(repo.create(a1)) {
			obj.put("status", "success");
		}
		else {
			obj.put("status", "failed");
		}
		return Response.status(Status.OK).entity(obj.toJSONString()).build();
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
			obj.put("name", pdb.getName());
			obj.put("email", pdb.getEmail());
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
	
	/*
	@POST
	@Path("upload")
	@Consumes({MediaType.MULTIPART_FORM_DATA})
	@Produces(MediaType.APPLICATION_JSON)
	public Response uploadFile(  @FormDataParam("file") InputStream fileInputStream,
	                                @FormDataParam("file") FormDataContentDisposition fileMetaData) throws Exception
	{
	    String UPLOAD_PATH = "./file/";
	    try
	    {
	        int read = 0;
	        byte[] bytes = new byte[1024];
	 
	        OutputStream out = new FileOutputStream(new File(UPLOAD_PATH + fileMetaData.getFileName()));
	        while ((read = fileInputStream.read(bytes)) != -1)
	        {
	            out.write(bytes, 0, read);
	        }
	        out.flush();
	        out.close();
	    } catch (IOException e)
	    {
	        e.printStackTrace();
	    }
	    return Response.status(Status.OK).entity("{}").build();
	}*/

}
