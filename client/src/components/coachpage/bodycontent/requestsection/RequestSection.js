import React from "react"; 
import "./InboxSection.css";
import InboxSearch from "./inboxsearch/InboxSearch"

const InboxSection = () => (
	<div id="inboxSection">
		<h3 className="text-center">Pending VOD review Requests</h3>
		<h4><u>Select a VOD and start review</u></h4>
		
		<InboxSearch />
		

		
	</div>
)

export default InboxSection;
