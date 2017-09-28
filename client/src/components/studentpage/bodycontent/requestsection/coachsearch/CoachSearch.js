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
			  <label for="language">Language</label><br/>
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
				<div className="tableHeader bio">Bio</div>
				<div className="tableHeader">ELO</div>
				<div className="tableHeader">Language</div>
				<div className="tableHeader">Rating</div>
				<div className="tableHeader">Profile</div>
			</div>
			<div id="tableRow">
				<div className="rowOne">Coach Name</div>
				<div className="rowOne">Mid</div>
				<div className="rowOne bio">LoL coach with four years experience</div>
				<div className="rowOne">Diamond II</div>
				<div className="rowOne">English</div>
				<div className="rowOne">9.2</div>
				<div className="rowOne">
					<a href="">View Profile</a>
				</div>
			</div>
			<div id="tableRow">
				<div className="rowTwo">Coach Name</div>
				<div className="rowTwo">Mid</div>
				<div className="rowTwo bio">LoL coach with four years experience</div>
				<div className="rowTwo">Diamond II</div>
				<div className="rowTwo">English</div>
				<div className="rowTwo">9.2</div>
				<div className="rowTwo">
					<a href="">View Profile</a>
				</div>
			</div>
			<div id="tableRow">
				<div className="rowThree">Coach Name</div>
				<div className="rowThree">Mid</div>
				<div className="rowThree bio">LoL coach with four years experience</div>
				<div className="rowThree">Diamond II</div>
				<div className="rowThree">English</div>
				<div className="rowThree">9.2</div>
				<div className="rowThree">
					<a href="">View Profile</a>
				</div>
			</div>
			<div id="tableRow">
				<div className="rowFour">Coach Name</div>
				<div className="rowFour">Mid</div>
				<div className="rowFour bio">LoL coach with four years experience</div>
				<div className="rowFour">Diamond II</div>
				<div className="rowFour">English</div>
				<div className="rowFour">9.2</div>
				<div className="rowFour">
					<a href="">View Profile</a>
				</div>
			</div>
			<div id="tableRow">
				<div className="rowFive">Coach Name</div>
				<div className="rowFive">Mid</div>
				<div className="rowFive bio">LoL coach with four years experience</div>
				<div className="rowFive">Diamond II</div>
				<div className="rowFive">English</div>
				<div className="rowFive">9.2</div>
				<div className="rowFive">
					<a href="">View Profile</a>
				</div>
			</div>
		</div>

		<div id="pagination">
			<ul className="pagination">
			  <li><a id="prevCoach" href="#">Prev</a></li>
			  <li><a href="#">1</a></li>
			  <li><a href="#">2</a></li>
			  <li><a href="#">3</a></li>
			  <li><a href="#">4</a></li>
			  <li><a href="#">5</a></li>
			  <li><a id="nextCoach" href="#">Next</a></li>
			</ul>
		</div>


	</div>


)

export default CoachSearch;
