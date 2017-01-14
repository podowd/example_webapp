package example.service;

import java.util.ArrayList;
import java.util.List;

import example.domain.Result;

public class SearchService {    	
	public List<Result> search(String searchQuery) {
    	List<Result> results = new ArrayList<Result>();
    	for (int i = 0; i< (10 * Math.random()); i++) {
    		results.add(new Result("Test_"+searchQuery+"_"+i));
    	}
       	return results;
    }
}
