import React from "react"; 
import "./CoachFilters.css";

const CoachFilters = () => (
	
<div id="coachFilters" className="text-center">	
	<h5 id="coachFilterLabel"><b>Coach Filters: </b></h5>
	
	<form id="serverFilter" className="coachFilter">
	  <label for="server">Server: </label>
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
	  <label for="role">Role: </label>
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
	  <label for="champion">Champion</label>
	  <select name="champion">
	    <option value="all">All Champions: </option>
	  </select>
	</form>

	<form id="languageFilter" className="coachFilter">
	  <label for="language">Language: </label>
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



		
)

export default CoachFilters;
