import React from 'react';

const PurchaseDetails = () => {
	return (
		<div className="row mt-3">
		<div className="col">
		<div className="card mt-3">
	<div className="card-body">
	<ul className="list-group list-group-flush">
		<li className="list-group-item">
		<div className="d-flex justify-content-between flex-wrap flex-md-nowrap  ">
		<h5 >Request Details</h5>
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2 ">
            <button type="button" className="btn btn-sm btn-outline-secondary">Edit Request</button>
			<button type="button" className="btn btn-sm btn-outline-secondary">Delete Request</button>               
          </div>
        
        </div>			
      </div>
		</li>
	  <li className="list-group-item">Description: Requesting for Chairs and Table</li>
	  <li className="list-group-item">Qty/Unit: 5 Sets</li>
	  <li className="list-group-item">Estimated Price: AED350</li>
	  <li className="list-group-item">Attached File: someattachedfile.jpg </li>
	  <li className="list-group-item">Remarks: We need it by Monday</li>
	</ul>
	  </div>
	</div>
  
	
  </div>
  
		</div>
	);
};

export default PurchaseDetails;