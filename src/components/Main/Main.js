import React from 'react';
import UserDetails from './UserDetails';
import PurchaseForm from './PurchaseForm';
import Header from '../Layout/Header';
import SideBar from '../Layout/SideBar';
const Main = () => {
	return (
		<>
			<Header />
					<SideBar />	 
					<main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Purchase Request Form</h1>     			
      </div>
	<UserDetails />
	<PurchaseForm />	
    </main>	
		</>
		 
	)

}



export default Main;