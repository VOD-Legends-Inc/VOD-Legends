import React from "react"; 
import "./CoachSearch.css";

const CoachSearch = () => (
	<div id="coachSearch">		

		<div id="coachFilters">			
			<form id="serverFilter" className="coachFilter">
			  <label for="server">Server</label><br/>
			  <select name="server">
			    <option value="all">All Servers</option>
			    <option value="na">North America</option>
			    <option value="euw">Europe West</option>
			    <option value="eune">Europe Nordic and East</option>
			    <option value="br">Brazil</option>
			    <option value="latamn">Latin America North</option>
			    <option value="latams">Latin America South</option>
			    <option value="tk">Turkey</option>
			    <option value="ru">Russia</option>
			    <option value="oc">Oceania</option>
			  </select>
			</form>

			<form id="roleFilter" className="coachFilter">
			  <label for="role">Role</label><br/>
			  <select name="role">
			    <option value="all">All Roles</option>
			    <option value="top">Top</option>
			    <option value="jungle">Jungle</option>
			    <option value="mid">Mid</option>
			    <option value="adc">ADC</option>
			    <option value="support">Support</option>
			  </select>
			</form>

			<form id="championFilter" className="coachFilter">
			  <label for="champion">Champion</label><br/>
			  <select name="champion">
			    <option value="all">All Champions</option>
			  </select>
			</form>

			<form id="languageFilter" className="coachFilter">
			  <label for="leanguage">Language</label><br/>
			  <select name="language">
			    <option value="all">Any Language</option>
			    <option value="en">English</option>
			    <option value="ger">German</option>
			    <option value="fr">French</option>
			    <option value="sp">Spanish</option>
			    <option value="po">Polish</option>
			    <option value="ru">Russian</option>
			    <option value="kr">Korean</option>
			    <option value="cn">Chinese</option>
			    <option value="it">Italian</option>
			    <option value="no">Norwegian</option>
			    <option value="sw">Swedish</option>
			    <option value="pt">Portuguese</option>
			    <option value="da">Danish</option>
			    <option value="gr">Greek</option>
			    <option value="other">Other</option>
			  </select>
			</form>
		</div>

		<br/><br/><br/><br/>

		<div id="coachTable">
			<div id="tableHeaders">
				<div className="tableHeader">Coach</div>
				<div className="tableHeader">Role</div>
				<div className="tableHeader">Bio</div>
				<div className="tableHeader">ELO</div>
				<div className="tableHeader">Language</div>
				<div className="tableHeader">Rating</div>
			</div>
			<br/><br/>
			<div id="tableRow">
				<div className="rowOne">Coach</div>
				<div className="rowOne">Coach</div>
				<div className="rowOne">Coach</div>
				<div className="rowOne">Coach</div>
				<div className="rowOne">Coach</div>
				<div className="rowOne">Coach</div>
			</div>
		</div>


	</div>


)

export default CoachSearch;
