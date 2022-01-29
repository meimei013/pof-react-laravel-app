import React from 'react';
import Department from '../Department';
import BudgetHolder from '../BudgetHolder';
import { useUserAuth } from "../../context/UserAuthContext";

const UserDetails = (props) => {
	const {user } = useUserAuth();
	return (		
		<div className="col-md-12 ">		
		 <div className="row mt-3">
		  <div className="col">
		  <label htmlFor="requestedby" className="form-label"><strong>Requested By:</strong></label> <span> {user && user.email}</span>			
		  </div>
		  <div className="col">
		  <label htmlFor="fname" className="form-label"><strong>Full Name: </strong></label> <span>Mae Ann Ibarra</span>			
		  </div>
		  <div className="col">
		  <label htmlFor="lname" className="form-label"><strong>Requested Date:</strong></label>	<span>December 17, 2021</span>			
		  </div>
		</div>
		<div className="row mt-3">
		 <Department depId={props.depId} depName={props.depName} />
		 <BudgetHolder budId={props.budId} budName={props.budName} />		 
		</div> 
		</div> 
	);
};

export default UserDetails;