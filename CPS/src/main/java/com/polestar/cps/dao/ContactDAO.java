package com.polestar.cps.dao;

import java.util.List;

//import org.springframework.stereotype.Repository;

import com.polestar.cps.model.Contact;

/**
 * Defines DAO operations for the contact model.
 * 
 *
 */

public interface ContactDAO {
	
	public void saveOrUpdate(Contact contact);
	
	public void delete(int contactId);
	
	public Contact get(int contactId);
	
	public List<Contact> list();
	
	public void createAuditTable(Contact contact,Contact person);
	
	
}