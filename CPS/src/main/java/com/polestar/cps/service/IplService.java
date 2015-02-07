package com.polestar.cps.service;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.polestar.cps.model.Contact;
import com.polestar.cps.model.IplTeam;

/**
 * Defines DAO operations for the contact model.
 * 
 *
 */

public interface IplService {
	

	
	
	
	public List<IplTeam> list();
}