import React from 'react';

const BudgetHolder = () => {

	const BUDGETHOLDER = [
		{budId: 1, budName: "John Conrad"},
		{budId: 2, budName: "Saiju"},
		{budId: 3, budName: "Wilson"},
		{budId: 4, budName: "George"}
	]

	return (
		<div className="col">
		<label htmlFor="lname" className="form-label">Budget Holder</label>
		<select className="form-select" aria-label="Default select example">
			  <option value="Open this select menu">Open this select menu</option>
			  {BUDGETHOLDER.map((budHolder) => (
				<option value={budHolder.budName} key={budHolder.budId}>{budHolder.budName}</option>			
			  ))}
		  </select>
		</div>
	);
};

export default BudgetHolder;