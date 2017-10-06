import React from "react"; 
import "./StudentImage.css";

const StudentImage = props => (


<div className="studentImage">
	<div className="container-fluid">
		<div className="topDiv">
			<img src="./images/empty_profile.png" alt="profileImage" />
			<h5>{props.username}</h5>
			<img id="eloPic" src="./images/bronze.png" alt="eloImage"/> 
			<span>{props.elo}</span>
			<p className="text-center">{props.bio}</p>
		</div>
		<div className="botDiv">			
			<h5 className='text-center'>Name: {props.firstName} {props.lastName}</h5>
		</div>

	</div>
</div>







);

export default StudentImage;
