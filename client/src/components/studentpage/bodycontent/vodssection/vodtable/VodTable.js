import React from "react"; 
import "./VodTable.css";

const VodTable = () => (
	<div id="VodTable">
		<div id="tableHeaders">
			<div className="tableHeader vodTitle">Title</div>
			<div className="tableHeader coach">Coach</div>
			<div className="tableHeader">Date</div>
			<div className="tableHeader">Role</div>
			<div className="tableHeader">Champion</div>
		</div>
		<div id="tableRow">
			<div className="rowOne vodTitle">Zyra Game against a Sona</div>
			<div className="rowOne coach">Coach James</div>
			<div className="rowOne">Sept. 8, 2017</div>
			<div className="rowOne">Support</div>
			<div className="rowOne">Zyra</div>
		</div>
		<div id="tableRow">
			<div className="rowTwo vodTitle">Fizz Game against LeBlanc</div>
			<div className="rowTwo coach">Coach James</div>
			<div className="rowTwo">Sept. 8, 2017</div>
			<div className="rowTwo">Mid</div>
			<div className="rowTwo">Fizz</div>
		</div>
		<div id="tableRow">
			<div className="rowThree vodTitle">Karma game against Thresh/Kalista</div>
			<div className="rowThree coach">Coach James</div>
			<div className="rowThree">Sept. 8, 2017</div>
			<div className="rowThree">Support</div>
			<div className="rowThree">Support</div>
		</div>
		<div id="tableRow">
			<div className="rowFour vodTitle">Xayah game against Cait</div>
			<div className="rowFour coach">Coach James</div>
			<div className="rowFour">Sept. 8, 2017</div>
			<div className="rowFour">ADC</div>
			<div className="rowFour">Xayah</div>
		</div>
		<div id="tableRow">
			<div className="rowFive vodTitle">Orianna game against Syndra</div>
			<div className="rowFive coach">Coach James</div>
			<div className="rowFive">Sept. 8, 2017</div>
			<div className="rowFive">Mid</div>
			<div className="rowFive">Orianna</div>
		</div>

		<div id="pagination" className="pull-left">
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

export default VodTable;
