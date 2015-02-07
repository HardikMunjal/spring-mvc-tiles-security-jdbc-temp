package com.polestar.cps.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import javax.sql.DataSource;

import com.polestar.cps.model.Contact;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;
//import org.springframework.stereotype.Service;


@Repository
public class ContactDAOImpl implements ContactDAO {

	
	@Autowired
	private DataSource dataSource;
	    
	
	
	@Override
	public void saveOrUpdate(Contact contact) {
		JdbcTemplate jdbcTemplate = new JdbcTemplate(dataSource);
		// implementation details goes here...
		
		if (contact.getId() > 0) {
			// update
			String sql = "UPDATE contact SET name=?, email=?, address=?, "
						+ "telephone=? WHERE contact_id=?";
			jdbcTemplate.update(sql, contact.getName(), contact.getEmail(),
					contact.getAddress(), contact.getTelephone(), contact.getId());
		} else {
			// insert
			String sql = "INSERT INTO contact (name, email, address, telephone)"
						+ " VALUES (?, ?, ?, ?)";
			jdbcTemplate.update(sql, contact.getName(), contact.getEmail(),
					contact.getAddress(), contact.getTelephone());
		}
	}

	
	
	@Override
	public void delete(int contactId) {
		JdbcTemplate jdbcTemplate = new JdbcTemplate(dataSource);
		// implementation details goes here...
		String sql = "DELETE FROM contact WHERE contact_id=?";
	    jdbcTemplate.update(sql, contactId);
	}

	@Override
	public List<Contact> list() {
		JdbcTemplate jdbcTemplate = new JdbcTemplate(dataSource);
		// implementation details goes here...
		String sql = "SELECT * FROM contact";
	    List<Contact> listContact = jdbcTemplate.query(sql, new RowMapper<Contact>() {
	 
	        @Override
	        public Contact mapRow(ResultSet rs, int rowNum) throws SQLException {
	            Contact aContact = new Contact();
	 
	            aContact.setId(rs.getInt("contact_id"));
	            aContact.setName(rs.getString("name"));
	            aContact.setEmail(rs.getString("email"));
	            aContact.setAddress(rs.getString("address"));
	            aContact.setTelephone(rs.getString("telephone"));
	 
	            return aContact;
	        }
	 
	    });
	 
	    return listContact;
	}

	
	
	@Override
	public Contact get(int contactId) {
		JdbcTemplate jdbcTemplate = new JdbcTemplate(dataSource);
		// implementation details goes here...
		String sql = "SELECT * FROM contact WHERE contact_id=" + contactId;
	    return jdbcTemplate.query(sql, new ResultSetExtractor<Contact>() {
	 
	        @Override
	        public Contact extractData(ResultSet rs) throws SQLException,
	                DataAccessException {
	            if (rs.next()) {
	                Contact contact = new Contact();
	                contact.setId(rs.getInt("contact_id"));
	                contact.setName(rs.getString("name"));
	                contact.setEmail(rs.getString("email"));
	                contact.setAddress(rs.getString("address"));
	                contact.setTelephone(rs.getString("telephone"));
	                return contact;
	            }
	 
	            return null;
	        }
	 
	    });
	}



	@Override
	public void createAuditTable(Contact contact,Contact person) {
		// TODO Auto-generated method stub
		JdbcTemplate jdbcTemplate = new JdbcTemplate(dataSource);
		// implementation details goes here...
		
		
			// insert
            String sql1= "create table contact_aud(name int,email varchar(20),createdBy varchar(20)";
            
		
			String sql = "INSERT INTO contact_aud (name, email, address, telephone,person)"
						+ " VALUES (?, ?, ?, ?,?)";
			
			jdbcTemplate.update(sql,contact.getId(), contact.getName(), contact.getEmail(),
					contact.getAddress(), contact.getTelephone(),person.getName());
		
	}

		
	

}