import React from "react"; 
import "./StudentVods.css";
import StudentVodImages from "./studentvodimages/StudentVodImages";
import StudentVod from "./studentvod/StudentVod";

const StudentVods = () => (

<div id="studentVods">
	<h4>Your VODS</h4>

	<StudentVodImages />

	<StudentVod />


</div>

);

export default StudentVods;
