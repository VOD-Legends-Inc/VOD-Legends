import React from "react"; 
import "./CoachImage.css";

const CoachImage = () => (

<div className="coachImage">
	<div className="container-fluid">
		<div className="topDiv">
			<img src="./images/empty_profile.png" alt="profileImage"/>
			<h5>Username</h5>
			<p className="text-center">"Diamond Support main. Will help you improve in no time!"</p>
			<img id="eloPic" alt="profileImage" src="./images/diamond.png" /> 
			<span>Diamond Division</span>
		</div>
		<div className="botDiv">
			<h5 className='text-center'>Coach Rating: 9.1</h5>
			<h5 className='text-center'>Coach Since: September 8, 2017</h5>
		</div>

	</div>
</div>	

);

export default CoachImage;
