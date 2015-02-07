package com.polestar.cps.controller;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;






import com.polestar.cps.dao.iplDAO;
import com.polestar.cps.model.Contact;
import com.polestar.cps.model.IplTeam;

@Controller
public class IplController {
	
	
	@Autowired
    private iplDAO iplDAO;
	
	
	
	
	
	
	
	
	@RequestMapping(value="/ext")
	public ModelAndView list3(ModelAndView model) throws IOException{
	    List<IplTeam> listContact = iplDAO.list();
	    model.addObject("listContact", listContact);
	    model.setViewName("ipl/ExtIpl");
	 
	    return model;
	}
	
	
	
	
	
	
	
	
	
	@ResponseBody
	@RequestMapping(value="aaaba")
	public Map<String,List<IplTeam>> loadAllContacts()
	{
		Map<String,List<IplTeam>> books= new HashMap<String,List<IplTeam>>();
		books.put("books",iplDAO.list());
		return books;
	}
	

	
	
	
	
	
	
	
	
	

}
