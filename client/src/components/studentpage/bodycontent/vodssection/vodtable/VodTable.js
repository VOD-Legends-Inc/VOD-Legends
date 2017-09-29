import React from "react"; 
import "./VodTable.css";

const VodTable = () => (
	<div id="vodTable">
		<div id="tableHeaders">
			<div className="tableHeader vodTitle">Title</div>
			<div className="tableHeader coach">Coach</div>
			<div className="tableHeader date">Date</div>
			<div className="tableHeader role">Role</div>
			<div className="tableHeader">Champion</div>
		</div>
		<div className="tableRows">
			<div className="tableBody vodTitle">Zyra Game against a Sona</div>
			<div className="tableBody coach">Coach James</div>
			<div className="tableBody date">Sept. 8, 2017</div>
			<div className="tableBody role">Support</div>
			<div className="tableBody">Zyra</div>
		</div>
		<div className="tableRow">
			<div className="tableBody vodTitle">Fizz Game against LeBlanc</div>
			<div className="tableBody coach">Coach James</div>
			<div className="tableBody date">Sept. 8, 2017</div>
			<div className="tableBody role">Mid</div>
			<div className="tableBody">Fizz</div>
		</div>
		<div className="tableRow">
			<div className="tableBody vodTitle">Karma game against Thresh/Kalista</div>
			<div className="tableBody coach">Coach James</div>
			<div className="tableBody date">Sept. 8, 2017</div>
			<div className="tableBody role">Support</div>
			<div className="tableBody">Support</div>
		</div>
		<div className="tableRow">
			<div className="tableBody vodTitle">Xayah game against Cait</div>
			<div className="tableBody coach">Coach James</div>
			<div className="tableBody date">Sept. 8, 2017</div>
			<div className="tableBody role">ADC</div>
			<div className="tableBody">Xayah</div>
		</div>
		<div className="tableRow">
			<div className="tableBody vodTitle">Orianna game against Syndra</div>
			<div className="tableBody coach">Coach James</div>
			<div className="tableBody date">Sept. 8, 2017</div>
			<div className="tableBody role">Mid</div>
			<div className="tableBody">Orianna</div>
		</div>

	</div>
		


)

export default VodTable;
