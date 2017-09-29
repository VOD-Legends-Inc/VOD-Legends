import React from "react"; 
import "./ProfileSection.css";

const ProfileSection = () => (
	<div id="profileSection">
	////////////////
	/////////////2//
/*<div className="row">
	<div className="container">

		<div className="col-sm-3 col-md-3 col-lg-3">
			<h3 className="text-center">Your Profile</h3>
			<img id="profilePic" className="center-block" src="img/logom2.png">
			<div id="editProfilePic">
				<div className="text-center">Edit Profile Picture: </div> 
				<input type="file" id="myFile" />
			</div>	
			<br>
			<a href="#" id="editProfile" className="center-block text-center">Edit Profile</a>	
		</div> 

		<div className="col-sm-9 col-md-9 col-lg-9">

			<div className="row">

				<div className="col-sm-6 col-md-6 col-lg-6">

					<label>First Name</label>
					<input id="firstName" className="profileText form-control" disabled="true" type="text">
				
				</div>

				<div className="col-sm-6 col-md-6 col-lg-6">

					<label>Last Name</label>
					<input id="lastName" className="profileText form-control" disabled="true" type="text">

				</div>

			</div>
			
			<label>Username</label>
			<input id="userName" className="profileText form-control" disabled="true" type="text">

			<label>Email</label>
			<input id="email" className="profileText form-control" disabled="true" type="Email">

			<label>Bio</label>
			<textarea id="bio" className="profileText form-control" disabled="true" rows="5" type="text"></textarea>

			<label>Location</label>
			<input id="location" className="profileText form-control" disabled="true" type="text"><br>

			<button type="button" id="profileButton" className="btn-primary btn center-block">Update Profile</button>
			<br>			

		</div> 

	</div>

</div>*/
	///////////2///

// this section will control the edit profile functions
/*$("#editProfile").on("click", function(){
	$(".profileText").prop("disabled", false);
  	$("#editProfilePic").css("display", "block");
});

$("#profileButton").on("click", function(){
	$(".profileText").prop("disabled", true);
  	$("#editProfilePic").css("display", "none");
})

//This section will populate profile data and user stories on document ready
var userID;

//userID = localStorage.userID;
userID = 1;

$( document ).ready(function() {
	getProfileData(userID);	
	getUserStories(userID);
});

function getProfileData(id){
	$.get("/api/user/id/" + id, function(data) {
      console.log(data);
      
      var userName = data.userName;
      var firstName = data.firstName;
      var lastName = data.lastName;
      var email = data.email;
      var bio = data.bio;
      var location = data.location;
      var storyCount = data.Stories.length;

      $("#firstName").val(firstName);
      $("#lastName").val(lastName);
      $("#userName").val(userName);
      $("#email").val(email);
      $("#bio").val(bio);
      $("#location").val(location);
      $("#storyCount").val(storyCount);

    });
}


//section for update profile button functionality
$("#profileButton").on("click", function(){
  updateProfileData();
})

function updateProfileData(){
    
    var firstName = $("#firstName").val().trim();
    var lastName = $("#lastName").val().trim();
    var userName = $("#userName").val().trim();
    var email = $("#email").val().trim();
    var bio = $("#bio").val().trim();
    var location = $("#location").val().trim();
    
    var userData = {
      id: userID,
      firstName: firstName,
      lastName: lastName,
      userName : userName,
      email: email,
      bio: bio,
      location: location,
    };
  
    $.ajax({
      method: "PUT",
      url: "/api/user",
      data: userData,
    })
    .done(function() {
      console.log("User data updated")
    });
  
}*/
/////////////////////
	</div>

)

export default ProfileSection;
