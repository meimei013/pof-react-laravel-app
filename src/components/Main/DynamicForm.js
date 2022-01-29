import React, { useState } from 'react';

const DynamicForm = () => {

	const [addRequestData, setAddRequestData] = useState([
		{itemDesc:"",quantity:"",estimatedPrice:"",attachFile:"",remarks:""}
	])

	const handleCahnge = (index, event) => {
		const values = [...addRequestData];
		if(event.target.name === "itemDesc"){
			values[index].itemDesc = event.target.value
		}else if(event.target.name === "quantity"){
			values[index].quantity = event.target.value
		}else if(event.target.name === "estimatedPrice"){
			values[index].estimatedPrice = event.target.value
		}else if(event.target.name === "attachFile"){
			values[index].attachFile = event.target.value
		}else if(event.target.name === "remarks"){
			values[index].remarks = event.target.value
		}
		
		setAddRequestData(values);
	}

	const handleAddMore = () => {
		const values = [...addRequestData];
		values.push(
			{itemDesc:"",quantity:"",estimatedPrice:"",attachFile:"",remarks:""}
		)
		setAddRequestData(values);
	}

	const handleRemove = () => {
		const values = [...addRequestData];
		if (values.length > 1) values.pop();
		setAddRequestData(values);
	}

	return (
		<div>
					<div className="row mt-3">
		<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      	<div className="btn-group me-2">
		  <button onClick={handleAddMore} type="button" className="btn btn-sm btn-outline-secondary">AddMore</button> 
		  <button onClick={handleRemove} type="button" className="btn btn-sm btn-outline-secondary">Remove</button>           
          </div> 	
      </div>
		</div> 
			{addRequestData.map((data, i) => {
				return (
					<div className="row">
    <div className="col-sm-8 p-3 ">
      <div className="row">
    <div className="mb-3 mt-3 col-sm-12">
      <label htmlFor="email">Item Description</label>
      <input type="email" className="form-control" id="email" placeholder="Enter Description" 
	  	name="itemDesc" 
		onChange={event => handleCahnge(i,event)} 
		value={data.itemDesc}
	  />
    </div>
    <div className="mb-3 col-sm-2">
      <label htmlFor="pwd">Quantity</label>
      <input type="password" className="form-control" id="pwd" placeholder="Enter Quantity" 
	  	name="quantity" 
		onChange={event => handleCahnge(i,event)} 
		value={data.quantity} 
	  />
    </div>
     <div className="mb-3 col-sm-2">
      <label htmlFor="pwd">Estimated Price</label>
      <input type="password" className="form-control" id="pwd" placeholder="Enter Price" 
	  	name="estimatedPrice" 
		onChange={event => handleCahnge(i,event)} 
		value={data.estimatedPrice}  
	  />
    </div>
      <div className="mb-3 col-sm-8">
      <label htmlFor="pwd">Attachement</label>
      <input type="password" className="form-control" id="pwd" placeholder="upload atachment" 
	  	name="attachFile" 
		onChange={event => handleCahnge(i,event)} 
		value={data.attachFile} 
	  />
    </div>
   </div>
    </div>
    <div className="col-sm-4 p-3 ">
    <textarea className="form-control" rows="7" id="comment" name="text"></textarea>
    </div>    
  </div>
				)
			})}
		
		
		  <div class="d-grid gap-2 d-md-flex justify-content-md-end mt-3 mb-3">
  <button  onClick={handleRemove} class="btn btn-primary me-md-2" type="button">Send Request</button>
  <button  onClick={handleRemove} class="btn btn-primary" type="button">Cancel Request</button>
</div>

		</div>
	);
};

export default DynamicForm;