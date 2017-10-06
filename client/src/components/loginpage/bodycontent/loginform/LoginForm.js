import React,{Component} from "react";
import "./LoginForm.css";


class LoginForm extends Component {
	state = {
			email: "",
			password: "",
			coach: "",
			student: "",
		};

componentDidMount() {
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleCoachSubmit = event => {
    event.preventDefault();
    if (this.state.email && this.state.password) {
    	return(window.location.href ="/coach")
      }
  };
  handleStudentSubmit = event => {
    event.preventDefault();
    if (this.state.email && this.state.password) {
    	return(window.location.href ="/student")
      }
  };

render() {
	return (
		<div id="loginform">	
			<h1>Login</h1>
				<form>
				  <div className="form-group">
				    <label htmlFor="exampleInputEmail1">Email address</label>
				    	<input type="email" 
					    	className="form-control"
					    	name="email" 
					    	value={this.state.email}
					    	onChange={this.handleInputChange} 
					    	aria-describedby="emailHelp" 
					    	placeholder="Enter email"
					    />
				    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
				  </div>

				  <div className="form-group">
				    <label htmlFor="exampleInputPassword1">Password</label>
				    	<input type="password" 
						    className="form-control"
						    name="password" 
						    value={this.state.password}
					    	onChange={this.handleInputChange}  
						    placeholder="Password"
				    	/>
				  </div>

				  <div className="form-check">
				    <label className="form-check-label">
				      <input type="checkbox" className="form-check-input"/>
				      Save password
				    </label>
				  </div>

				  <button type="submit" 
				  	className="btn btn-primary"
				  	disabled={!(this.state.email && this.state.password)}
				  	onClick={(event) => this.handleCoachSubmit(event)}
				  >Coach SignIn
				  </button>
				  <button type="submit" 
				  	className="btn btn-primary"
				  	disabled={!(this.state.email && this.state.password)}
				  	onClick={(event) => this.handleStudentSubmit(event)}
				  >Student SignIn
				  </button>
				</form>
		</div>
		);
	}

}


export default LoginForm;

