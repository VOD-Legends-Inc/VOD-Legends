import React from "react"; 
import "./CoachImage.css";

const CoachImage = props => (

<div className="coachImage">
	<div className="container-fluid">
		<div className="topDiv">
			<img src="./images/empty_profile.png" alt="profileImage"/>
			<h5>{props.username}</h5>
			<img id="eloPic" alt="profileImage" src="./images/diamond.png" />
			<span>{props.elo}</span> 
			<p className="text-center">{props.bio}</p>
			<p className="text-center" id="black"> Name: {props.firstName} {props.lastName}</p>			
		</div>
		<div className="botDiv">
			<h5 className='text-center'>Coach Rating: {props.rating}</h5>
			<h5 className='text-center'>Coach Since: September 8, 2017</h5>
		</div>

	</div>
</div>	

);

export default CoachImage;
