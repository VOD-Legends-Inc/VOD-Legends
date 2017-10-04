import React from "react"; 
import "./StudentVodImage.css";

const StudentVodImage = props => (

<div className="vodImage">
	<h5 id="topVodImage">{props.title}</h5>
	<img src="./images/charIcons/karma.png" alt="characterimage" />
	<div id="bottomVodImage">
		<h5>Coach: {props.coach}</h5>
		<h5>Student: {props.student}</h5>
	</div>
</div>



);

export default StudentVodImage;
