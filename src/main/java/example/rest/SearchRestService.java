package example.rest;

import java.util.List;

import example.domain.Result;
import example.service.SearchService;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/search")
public class SearchRestService {

	@Path("{searchQuery}")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response searchEmails(@PathParam("searchQuery") String searchQuery) {
		SearchService searchService = new SearchService();
	    List<Result> results = searchService.search(searchQuery);
	    return Response.ok(results).build();
    }
}
