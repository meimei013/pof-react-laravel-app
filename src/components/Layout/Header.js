import React from 'react';
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../../context/UserAuthContext";
const Header = () => {
	const { logOut, user } = useUserAuth();
	const navigate = useNavigate();
	const handleLogout = async () => {
	  try {
		await logOut();
		navigate("/");
	  } catch (error) {
		console.log(error.message);
	  }
	};
	return (
	
	<>
		<header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
  <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="https://www.petpro.ae/">Company namedsdas</a>
  <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
 
  <ul className="nav nav-pills nav-style">
        <li className="nav-item"> Hello Welcome <br />
        {user && user.email}</li>
        <li className="nav-item"> <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button></li>
      </ul>
</header>
	</>
	
	);
};

export default Header;
