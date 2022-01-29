  
  const SideBar = () => {
	return (
		   <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
	<div className="position-sticky pt-3">
	  <ul className="nav flex-column">
		<li className="nav-item">
		  <a className="nav-link active" aria-current="page" href="https://www.petpro.ae/">
			<span data-feather="home"></span>
			 Add Request Form
		  </a>
		</li>
		<li className="nav-item">
		  <a className="nav-link" href="https://www.petpro.ae/">
			<span data-feather="file"></span>
			Request History
		  </a>
		</li>
	   
		<h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
		<span>Admin Access</span>
		<a className="link-secondary" href="https://www.petpro.ae/" aria-label="Add a new report">
		  <span data-feather="plus-circle"></span>
		</a>
	  </h6>
	  </ul>
	  <ul className="nav flex-column mb-2">
		<li className="nav-item">
		  <a className="nav-link" href="https://www.petpro.ae/">
			<span data-feather="file-text"></span>
			Budget Holder
		  </a>
		</li>
		<li className="nav-item">
		  <a className="nav-link" href="https://www.petpro.ae/">
			<span data-feather="file-text"></span>
			Department
		  </a>
		</li>
		<li className="nav-item">
		  <a className="nav-link" href="https://www.petpro.ae/">
			<span data-feather="file-text"></span>
			Report Summary
		  </a>
		</li>	
	  </ul>
	</div>
  </nav>
	)
}  

export default SideBar;

 