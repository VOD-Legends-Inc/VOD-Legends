import React from "react"; 
import "./Pagination.css";

const Pagination = () => (

<div id="pagination">
	<ul className="pagination">
	  <li><a id="prevCoach" href="">Prev</a></li>
	  <li><a href="">1</a></li>
	  <li><a href="">2</a></li>
	  <li><a href="">3</a></li>
	  <li><a href="">4</a></li>
	  <li><a href="">5</a></li>
	  <li><a id="nextCoach" href="">Next</a></li>
	</ul>
</div>


);

export default Pagination;
