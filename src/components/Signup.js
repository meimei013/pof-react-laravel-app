import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
import {useUserAuth} from '../context/UserAuthContext';

const Signup = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [passwordShown, setPasswordShown] = useState(false);
	const navigate = useNavigate();
	const {signUp} = useUserAuth();
	
	const togglePassword = () => { 
		setPasswordShown(!passwordShown);
	  };
	

	const handleSubmit = async(e) => {
		e.preventDefault();
		setError();
		try{
			await signUp(email,password);
			navigate('/')
		}catch(err){
			setError(err.message);
		}

	}

	return (
		<>


		<div className="container mt-3">
		
		   <div className="row justify-content-center MainWrapper">
			<div className="col-md-6">			
			<div className="MainWrapper">		
			{error && <Alert variant="danger">{error}</Alert>}
			<div className="LoginWrapper">	
<form onSubmit={handleSubmit} className="was-validated">
						<div className="mb-3 mt-3">
					  <label for="uname" className="form-label">Username:</label> 
					  <label for="uname" className="form-label float-end">Already have an account? <Link to="/">Log in</Link></label>
					  <input type="email"
					  placeholder="Email address"
					  onChange={(e) => setEmail(e.target.value)} 
					  className="form-control" 
					  id="uname" 			
					  name="uname" />
				  
					</div>
					<div className="mb-3">
					  <label for="pwd" className="form-label">Password:</label>					 
					  <label onClick={togglePassword} for="pwd" className="form-label float-end">{passwordShown ? "Hide" : "Show"}</label>
			 			 <input type={passwordShown ? "text" : "password"}
					  placeholder="Password"
					  onChange={(e) => setPassword(e.target.value)} 
					  className="form-control" 
					  id="pwd" 			 
					  name="pswd" />
					   
					</div>
				
					 <div className="mb-3">
					  <button type="submit" className="btn btn-primary">Sign up</button>      
					</div>  
					
			 
		  </form>
			</div>
		   </div>
		   </div>
		   </div>
		 
		</div>
		
		   
			</>
	);
};

export default Signup;