import {useSelector} from 'react-redux';
import React from 'react';
import { Link } from "react-router-dom";


const PurchaseList = (props) => {
	const purchases = useSelector((state) => state.purchases);


	return (
	<div className="row mt-3">
	<div className="col">
		{purchases.map(({id, itemDesc, quantity,estimatedPrice, attachFile, remarks}, i) => (
	<div className="card mt-3" key={id}>
	<div className="card-body" >
	<ul className="list-group list-group-flush" key={i}>
		<li className="list-group-item"  >
		<div className="d-flex justify-content-between flex-wrap flex-md-nowrap  ">
		<h5 >Request Details</h5>
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2 ">
		  <Link to={`/edit-user/${id}`}>
		  	<button type="button" className="btn btn-sm btn-outline-secondary">Edit Request</button>
			</Link>
 			
			<button type="button" className="btn btn-sm btn-outline-secondary">Delete Request</button>               
          </div>        
        </div>			
      </div>
		</li>
	  <li className="list-group-item" key={itemDesc} >Description: {itemDesc}</li>
	  <li className="list-group-item" key={quantity} >Qty/Unit: {quantity}</li>
	  <li className="list-group-item" key={estimatedPrice} >Estimated Price: {estimatedPrice}</li>
	  <li className="list-group-item" key={attachFile} >Attached File: {attachFile} </li>
	  <li className="list-group-item" key={remarks} >Remarks: {remarks}</li>
	</ul>
	  </div>
	</div>

	))}
  
	
  </div>
  
		</div>
	);
};


export default PurchaseList;