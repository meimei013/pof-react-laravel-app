import { useSelector } from 'react-redux';

//import {purchaseUpdated} from '../../features/purchase/purchaseSlice';
import React, {useState} from 'react';
import { useLocation } from "react-router-dom";
import PurchaseList from './PurchaseList/PurchaseList';

const EditPurchase = (props) => {

const { pathname } = useLocation();
console.log(pathname);
  const purchaseId = parseInt(pathname.replace("/edit-user/", ""));
	const purchase = useSelector((state) => state.purchases.find((purchase) => purchase.id ===  purchaseId));
	//const pData = useSelector((state) => state.purchases);
	
	//const dispatch = useDispatch();
	//const history = useNavigate();

	const [itemDesc, setItemDesc] = useState(purchase.itemDesc);
	const [quantity, setQuantity] = useState(purchase.quantity);
	const [estimatedPrice, setEstimatedPrice] = useState(purchase.estimatedPrice);
	const [attachFile, setAttachFile] = useState(purchase.attachFile);
	const [remarks, setRemarks] = useState(purchase.remarks);

	const handleDescription = (e) => setItemDesc(e.target.value);
	const handleQuantity = (e) => setQuantity(e.target.value);
	const handleEstimatedPrice = (e) => setEstimatedPrice(e.target.value);
	const handleAttachFile = (e) => setAttachFile(e.target.value);
	const handleRemarks = (e) => setRemarks(e.target.value);
	console.log("itemDesc" + itemDesc);
	console.log("handleDescription" + handleDescription);
	const handleClick = (e) => {
		
	}
	/**const handleClick = () => {
		dispatch(
			purchaseUpdated({
				id:purchaseId,
				itemDesc,
				quantity,
				estimatedPrice,
				attachFile,
				remarks,
			})
		)
		history.push("/");
		setItemDesc("");
		setQuantity("");
		setEstimatedPrice("");
		setAttachFile("");
		setRemarks("");
		
	}**/

	return (
		<>
		<div className="row mt-3">
		<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Edit Form</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2">
            <button onClick={handleClick} type="button" className="btn btn-sm btn-outline-secondary">Update Request</button>          
          </div>        
        </div>			
      </div>
		</div> 
	<div className="row mt-3">
		  <div className="col">
		  <label htmlFor="itemDescription" className="form-label">Item Description:</label>
			<input type="text" className="form-control" rows="2" id="comment" name="itemDescription"  onChange={handleDescription} value={itemDesc} /> 
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

export default EditPurchase;