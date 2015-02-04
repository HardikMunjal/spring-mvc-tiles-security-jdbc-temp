package com.polestar.cps.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.polestar.cps.dao.ContactDAO;
import com.polestar.cps.model.Contact;


@Service
public class ContactServiceImpl implements ContactService {

	@Autowired
	private ContactDAO contactDAO;
	
	@Override
	public void saveOrUpdate(Contact contact) {
		// TODO Auto-generated method stub
		contactDAO.saveOrUpdate(contact);
		}

	@Override
	public void delete(int contactId) {
		// TODO Auto-generated method stub
		contactDAO.delete(contactId);
	}

	@Override
	public Contact get(int contactId) {
		// TODO Auto-generated method stub
		
		return contactDAO.get(contactId);
	}

	@Override
	public List<Contact> list() {
		// TODO Auto-generated method stub
		return contactDAO.list();
	}

}
