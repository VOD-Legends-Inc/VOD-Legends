import React,{Component} from "react";
import "./LoginForm.css";


class LoginForm extends Component {
	state = {
			email: {},
			password: {}
		};

render() {
	return (
		<div id="loginform">	
			<h1>Login</h1>
				<form>
				  <div className="form-group">
				    <label htmlFor="exampleInputEmail1">Email address</label>
				    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
				    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
				  </div>

				  <div className="form-group">
				    <label htmlFor="exampleInputPassword1">Password</label>
				    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
				  </div>

				  <div className="form-check">
				    <label className="form-check-label">
				      <input type="checkbox" className="form-check-input"/>
				      Save password
				    </label>
				  </div>

				  <button type="submit" className="btn btn-primary">Submit</button>
				</form>
		</div>
		);
	}

}


export default LoginForm;

