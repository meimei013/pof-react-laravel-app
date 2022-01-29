import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {purchaseAdded} from '../../features/purchase/purchaseSlice';
import PurchaseList from './PurchaseList/PurchaseList';

const AddPurchase = () => {



	const dispatch = useDispatch();
	const [itemDesc, setItemDesc] = useState("");
	const [quantity, setQuantity] = useState("");
	const [estimatedPrice, setEstimatedPrice] = useState("");
	const [attachFile, setAttachFile] = useState("");
	const [remarks, setRemarks] = useState("");

	const handleDescription = (e) => setItemDesc(e.target.value);
	const handleQuantity = (e) => setQuantity(e.target.value);
	const handleEstimatedPrice = (e) => setEstimatedPrice(e.target.value);
	const handleAttachFile = (e) => setAttachFile(e.target.value);
	const handleRemarks = (e) => setRemarks(e.target.value);

	const purchaseCount = useSelector((state) => state.purchases.length);
	
	const handleClick = () => {
		dispatch(
			purchaseAdded({
				id:purchaseCount + 1,
				itemDesc,
				quantity,
				estimatedPrice,
				attachFile,
				remarks,
			})
		)
		setItemDesc("");
		setQuantity("");
		setEstimatedPrice("");
		setAttachFile("");
		setRemarks("");

	}

	return (
		<>
		<div className="row mt-3">
		<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Request Form</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2">
            <button onClick={handleClick} type="button" className="btn btn-sm btn-outline-secondary">Add Request</button>          
          </div>        
        </div>			
      </div>
		</div> 
	<div className="row mt-3">
		  <div className="col">
		  <label htmlFor="itemDescription" className="form-label">Item Description:</label>
			<input type="text" className="form-control" rows="2" id="comment" name="itemDescription" onChange={handleDescription} value={itemDesc} /> 
		  </div>
		  
		</div> 	
	<div className="row mt-3">
		  <div className="col">
		  <label htmlFor="quantity" className="form-label">Quantity:</label>
			<input type="text" className="form-control" name="quantity" onChange={handleQuantity} value={quantity} />
		  </div>
		  <div className="col">
		  <label htmlFor="estimatedPrice" className="form-label">Estimated Price</label>
			<input type="text" className="form-control" name="estimatedPrice" onChange={handleEstimatedPrice} value={estimatedPrice} />
		  </div>
		  <div className="col">
		  <label htmlFor="attachFile" className="form-label">Attach File</label>
			<input type="text" className="form-control" name="attachFile"  onChange={handleAttachFile} value={attachFile} />
		  </div>
		</div> 
<div className="row mt-3">
		  <div className="col">
		  <label htmlFor="remarks" className="form-label">Remarks:</label>
			<textarea className="form-control" rows="2" id="comment" name="remarks" onChange={handleRemarks} value={remarks}  />
		  </div>
		  
		</div> 	
		<PurchaseList/>
		</>
	);
};

export default AddPurchase;