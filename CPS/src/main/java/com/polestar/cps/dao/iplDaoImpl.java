package com.polestar.cps.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.polestar.cps.model.Contact;
import com.polestar.cps.model.IplTeam;


@Repository
public class iplDaoImpl implements iplDAO{

	@Autowired
	private DataSource dataSource;
	
	@Override
	public List<IplTeam> list() {
		JdbcTemplate jdbcTemplate = new JdbcTemplate(dataSource);
		// implementation details goes here...
		String sql = "SELECT * FROM ipl";
	    List<IplTeam> listIpl = jdbcTemplate.query(sql, new RowMapper<IplTeam>() {
	 
	        @Override
	        public IplTeam mapRow(ResultSet rs, int rowNum) throws SQLException {
	            
	        	IplTeam iplTeam = new IplTeam();
	 
	            iplTeam.setId(rs.getInt("id"));
	            iplTeam.setTeamName(rs.getString("TeamName"));
	            iplTeam.setTeamOwner(rs.getString("TeamOwner"));
	            iplTeam.setIplTitles(rs.getInt("IplTitles"));
	            iplTeam.setTeamCaptain(rs.getString("TeamCaptain"));
	            iplTeam.setTeamBudget(rs.getInt("TeamBudget"));
	            iplTeam.setTotalPlayers(rs.getInt("TotalPlayers"));
	            iplTeam.setWinPercentage(rs.getInt("WinPercentage"));
	            iplTeam.setMatchPlayed(rs.getInt("MatchPlayed"));
	            
	            return iplTeam;
	        }
	 
	    });
	 
	    return listIpl;
	}


}
