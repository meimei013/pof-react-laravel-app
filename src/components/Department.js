import React from 'react';

const Department = () => {
	const DEPARTMENT = [
		{depId: 1, depName: "IT"},
		{depId: 2, depName: "Art"},
		{depId: 3, depName: "Science"},
		{depId: 4, depName: "Sports"}
	]

	return (
		<div className="col">
		  <label htmlFor="fname" className="form-label">Department</label>
		  <select className="form-select" aria-label="Default select example">
				<option value="Open this select menu">Open this select menu</option>
				{DEPARTMENT.map((dept) => (
					<option value={dept.depName} key={dept.depId}>{dept.depName}</option>				
				))}
				
			</select>
		  </div>
	);
};

export default Department;