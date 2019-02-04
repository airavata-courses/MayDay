package com.microservice.red.test;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;


@Path("test")
public class MSTest {

	@GET
	@Produces(MediaType.TEXT_PLAIN)
	public Response getMsg() {
		//return Response.status(200).build();
		return Response.status(200).header("Response", "200 OK").build();
 
	}
}
