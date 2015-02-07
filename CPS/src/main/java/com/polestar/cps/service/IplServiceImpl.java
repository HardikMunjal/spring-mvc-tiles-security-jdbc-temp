package com.polestar.cps.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.polestar.cps.dao.iplDAO;
import com.polestar.cps.model.IplTeam;

public class IplServiceImpl implements IplService {

	
	@Autowired
	private iplDAO iplDAO;
	
	@Override
	public List<IplTeam> list() {
		// TODO Auto-generated method stub
		return iplDAO.list();
	}

}
