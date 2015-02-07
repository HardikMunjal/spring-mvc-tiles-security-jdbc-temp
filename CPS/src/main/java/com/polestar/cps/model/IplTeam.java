package com.polestar.cps.model;

public class IplTeam {
	
	
		private int id;
		private String TeamName;
		private String TeamOwner;
		private int IplTitles;
		private String TeamCaptain;
		private int TeamBudget;
		private  int TotalPlayers;
		private int WinPercentage;
		private int MatchPlayed;
		
		public IplTeam(){}
		
		public IplTeam(String TeamName,String TeamOwner,int IplTitles,String TeamCaptain,int TeamBudget,int TotalPlayers,int WinPercentage,int MatchPlayed)
		{
			this.TeamName=TeamName;
			this.TeamOwner=TeamOwner;
			this.IplTitles=IplTitles;
			this.TeamCaptain=TeamCaptain;
			this.TeamBudget=TeamBudget;
			this.TotalPlayers=TotalPlayers;
			this.WinPercentage=WinPercentage;
			this.MatchPlayed=MatchPlayed;
		}

		public int getId() {
			return id;
		}

		public void setId(int id) {
			this.id = id;
		}

		public String getTeamName() {
			return TeamName;
		}

		public void setTeamName(String TeamName) {
			this.TeamName = TeamName;
		}

		public String getTeamOwner() {
			return TeamOwner;
		}

		public void setTeamOwner(String teamOwner) {
			TeamOwner = teamOwner;
		}

		public int getIplTitles() {
			return IplTitles;
		}

		public void setIplTitles(int iplTitles) {
			IplTitles = iplTitles;
		}

		public String getTeamCaptain() {
			return TeamCaptain;
		}

		public void setTeamCaptain(String teamCaptain) {
			TeamCaptain = teamCaptain;
		}

		public int getTeamBudget() {
			return TeamBudget;
		}

		public void setTeamBudget(int teamBudget) {
			TeamBudget = teamBudget;
		}

		public int getTotalPlayers() {
			return TotalPlayers;
		}

		public void setTotalPlayers(int totalPlayers) {
			TotalPlayers = totalPlayers;
		}

		public int getWinPercentage() {
			return WinPercentage;
		}

		public void setWinPercentage(int winPercentage) {
			WinPercentage = winPercentage;
		}

		public int getMatchPlayed() {
			return MatchPlayed;
		}

		public void setMatchPlayed(int matchPlayed) {
			MatchPlayed = matchPlayed;
		}
		
		
}
