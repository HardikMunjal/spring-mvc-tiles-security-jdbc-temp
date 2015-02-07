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
	
	
	@RequestMapping(value="/extList")
	public ModelAndView list3(ModelAndView model) throws IOException{
	    List<Contact> listContact = contactDAO.list();
	    model.addObject("listContact", listContact);
	    model.setViewName("contact/ExtContact");
	 
	    return model;
	}
	
	
	@RequestMapping(value="/extGrid")
	public ModelAndView list4(ModelAndView model) throws IOException{
	    List<Contact> listContact = contactDAO.list();
	    model.addObject("listContact", listContact);
	    model.setViewName("contact/ContactGrid");
	 
	    return model;
	}
	
	@RequestMapping(value="/GridView")
	public ModelAndView list5(ModelAndView model) throws IOException{
	    List<Contact> listContact = contactDAO.list();
	    model.addObject("listContact", listContact);
	    model.setViewName("contact/ContactGridAdvanced");
	 
	    return model;
	}
	
	
	
	@ResponseBody
	@RequestMapping(value="aaab")
	public Map<String,List<Contact>> loadAllContacts()
	{
		Map<String,List<Contact>> books= new HashMap<String,List<Contact>>();
		books.put("books",contactDAO.list());
		return books;
	}
	

	
	
	
	
	
	
	
	@RequestMapping(value = "DEL", method = RequestMethod.PUT)
	public @ResponseBody Contact deleteEmployee(@PathVariable("id") int empId) {
		
		Contact emp = contactDAO.get(empId);
		contactDAO.delete(empId);
		return emp;
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
	   // Contact person=new Contact();
	   //contactDAO.createAuditTable(contact, person);
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
