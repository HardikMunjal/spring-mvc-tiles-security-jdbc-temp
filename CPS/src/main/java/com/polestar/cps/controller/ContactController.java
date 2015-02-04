package com.polestar.cps.controller;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.polestar.cps.dao.ContactDAO;
import com.polestar.cps.model.Contact;

@Controller
public class ContactController {
	
	@Autowired
    private ContactDAO contactDAO;
	
	
	
	
	@RequestMapping(value="/test1")
	public ModelAndView list1(ModelAndView model) throws IOException{
	    List<Contact> listContact = contactDAO.list();
	    model.addObject("listContact", listContact);
	    model.setViewName("Test1");
	 
	    return model;
	}
	@RequestMapping(value="/test2")
	public ModelAndView list2(ModelAndView model) throws IOException{
	    List<Contact> listContact = contactDAO.list();
	    model.addObject("listContact", listContact);
	    model.setViewName("basic");
	 
	    return model;
	}
	
	@RequestMapping(value="/")
	public ModelAndView listContact(ModelAndView model) throws IOException{
	    List<Contact> listContact = contactDAO.list();
	    model.addObject("listContact", listContact);
	    model.setViewName("contact/ContactList");
	    return model;
	}
	
	@RequestMapping(value = "/newContact", method = RequestMethod.GET)
	public ModelAndView newContact(ModelAndView model) {
	    Contact newContact = new Contact();
	    model.addObject("contact", newContact);
	    model.setViewName("contact/ContactForm");
	    return model;
	}
	
	
	
	
	@RequestMapping(value = "/saveContact", method = RequestMethod.POST)
	public ModelAndView saveContact(@ModelAttribute Contact contact) {
	    contactDAO.saveOrUpdate(contact);
	    return new ModelAndView("redirect:/");
	}
	
	@RequestMapping(value = "/deleteContact", method = RequestMethod.GET)
	public ModelAndView deleteContact(HttpServletRequest request) {
	    int contactId = Integer.parseInt(request.getParameter("id"));
	    contactDAO.delete(contactId);
	    return new ModelAndView("redirect:/");
	}
	
	@RequestMapping(value = "/editContact", method = RequestMethod.GET)
	public ModelAndView editContact(HttpServletRequest request) {
	    int contactId = Integer.parseInt(request.getParameter("id"));
	    Contact contact = contactDAO.get(contactId);
	    ModelAndView model = new ModelAndView("contact/ContactForm");
	    model.addObject("contact", contact);
	    return model;
	}
	

}
