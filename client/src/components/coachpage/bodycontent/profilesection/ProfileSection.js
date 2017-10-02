import React from "react"; 
import "./ProfileSection.css";

const ProfileSection = () => (
	<div id="profileSection">

<div className="row">
	<div className="container">

		<div className="col-sm-3 col-md-3 col-lg-3">
			<h3 className="text-center">Your Profile</h3>

			<br />
			<a href="#" id="editProfile" className="center-block text-center" />
		</div> 

		<div className="col-sm-9 col-md-9 col-lg-9">

			<div className="row">

				<div className="col-sm-6 col-md-6 col-lg-6">

					<label First Name />
					<input id="firstName" className="profileText form-control" disabled="true" type="text" />
				
				</div>

				<div className="col-sm-6 col-md-6 col-lg-6">

					<label Last Name />
					<input id="lastName" className="profileText form-control" disabled="true" type="text" />

				</div>

			</div>
			
			<label Username />
			<input id="userName" className="profileText form-control" disabled="true" type="text" />

			<label Email />
			<input id="email" className="profileText form-control" disabled="true" type="Email" />

			<label Bio />
			<textarea id="bio" className="profileText form-control" disabled="true" rows="5" type="text"></textarea>

			<label Location />
			<input id="location" className="profileText form-control" disabled="true" type="text" />

			<br />
			<button type="button" id="editButton" className="btn-primary btn center-block">Edit Profile</button>
			<br />
			<button type="button" id="profileButton" className="btn-primary btn center-block">Update Profile</button>
			<br />			

		</div> 

	</div>

</div>
	</div>

)

//This section holds the edit profile functions
$("#editProfile").on("click", function(){
	$(".profileText").prop("disabled", false);
  	$("#editProfilePic").css("display", "block");
});

$("#profileButton").on("click", function(){
	$(".profileText").prop("disabled", true);
  	$("#editProfilePic").css("display", "none");
});

//This section will hold the update profile button functionality
$("#profileButton").on("click", function(){
  updateProfileData();
})

//updateProfileData Function
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
  
}

export default ProfileSection;