import React,{Component} from "react";
import "./SignupForm.css";
import API from "../../../../utils/coachAPI";

class SignupForm extends Component {
state = {
    firstName: "",
    lastName: "",
    lolUserName: "",
    role: "",
    server: "",
    mainChampion: "",
    language: "",
    bio: "",
    password: ""
  };

  componentDidMount() {
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.firstName && this.state.lastName && this.state.lolUserName && this.state.password) {
      API.saveCoach({
      	email: this.state.email,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        lolUserName: this.state.lolUserName,
        role: this.state.role,
        server: this.state.server,
        mainChampion: this.state.mainChampion,
        language: this.state.language,
        bio: this.state.bio,
        password: this.state.password
      })
        .then(window.location.href ="/coach")
        .catch(err => console.log(err));
        console.log(this.state);
    }
  };

  render() {
    return (
    	<div id="signup-form">
    	<h1>Coach Signup</h1>
            <form>
              <div className="form-group">
              	 <label htmlFor="email">Email:</label>
	              	<input className="form-control"
		                value={this.state.email}
		                onChange={this.handleInputChange}
		                name="email"
		                placeholder="Email (required)"
	              	/>
              </div>

			  <div className="form-group">
              	<label htmlFor="lolUserName">User Name:</label>
	              	<input className="form-control"
		                value={this.state.lolUserName}
		                onChange={this.handleInputChange}
		                name="lolUserName"
		                placeholder="User Name (required)"
	              	/>
              </div>

              <div className="form-group">
              	<label htmlFor="password">Password:</label>
	              	<input className="form-control"
	              		type="password"
		                value={this.state.password}
		                onChange={this.handleInputChange}
		                name="password"
		                placeholder="Password (required)"
	              	/>
              </div>

               <div className="form-group">
                <label htmlFor="password">Re-Enter Password:</label>
                  <input className="form-control"
                    type="password"
                    name="password"
                    placeholder="Password (required)"
                  />
              </div>

              <div className="form-group">
              	<label htmlFor="firstName">First Name:</label>
	              	<input className="form-control"
		                value={this.state.firstName}
		                onChange={this.handleInputChange}
		                name="firstName"
		                placeholder="First Name (required)"
	              	/>
              </div>

              <div className="form-group">
              	<label htmlFor="lastName">Last Name:</label>
	              	<input className="form-control"
		                value={this.state.lastName}
		                onChange={this.handleInputChange}
		                name="lastName"
		                placeholder="Last Name (required)"
	              	/>
              </div>

              <div className="form-group">
              	<label htmlFor="mainChampion">Main Champion:</label>
	              	<input className="form-control"
		                value={this.state.mainChampion}
		                onChange={this.handleInputChange}
		                name="mainChampion"
		                placeholder="Character Type"
	              	/>
              </div>

              <div className="form-group">
              	<label htmlFor="role">Role:</label>
	              	<input className="form-control"
		                value={this.state.role}
		                onChange={this.handleInputChange}
		                name="role"
		                placeholder="Character Type"
	              	/>
              </div>

              <div className="form-group">
              	<label htmlFor="server">Server:</label>
	              	<input className="form-control"
		                value={this.state.server}
		                onChange={this.handleInputChange}
		                name="server"
		                placeholder="Server (USA or Europe)"
	              	/>
              </div>

              <div className="form-group">
              	<label htmlFor="language">Language:</label>
	              	<input className="form-control"
		                value={this.state.language}
		                onChange={this.handleInputChange}
		                name="language"
		                placeholder="Language"
	              	/>
              </div>
             <br></br>
              <div className="form-group">
              	<label htmlFor="bio">Bio:</label>
	                <textarea className="form-control"
		                value={this.state.bio}
		                onChange={this.handleInputChange}
		                name="bio"
		                placeholder="Please explain your League of Legends background"
	              	/>
              </div>
              <br></br>
              <button 
              	type="submit" 
              	className="btn btn-primary"
                disabled={!(this.state.firstName && this.state.lastName && this.state.lolUserName && this.state.password)}
                onClick={(event) => this.handleFormSubmit(event)}>
                Submit
                </button>
            </form>
         </div>   
    );
  }
}


export default SignupForm;

