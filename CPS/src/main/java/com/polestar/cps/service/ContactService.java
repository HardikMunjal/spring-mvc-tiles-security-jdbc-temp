package com.polestar.cps.service;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.polestar.cps.model.Contact;

/**
 * Defines DAO operations for the contact model.
 * 
 *
 */

public interface ContactService {
	
	public void saveOrUpdate(Contact contact);
	
	public void delete(int contactId);
	
	public Contact get(int contactId);
	
	public List<Contact> list();
}