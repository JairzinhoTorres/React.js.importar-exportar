import React from "react";
const Navbar = () => {
	return (
        <nav className="navbar navbar-expand-lg bg-dark" style={{height: "150px"}}>
        <div className="container-fluid">
        <img src="https://funkilandia.com/wp-content/uploads/2022/07/imagen_1.1.png" className="card-img-top " alt="..."style={{width: "218px"}}/>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse ms-5"style={{justifyContent: "center"}} id="navbarNavAltMarkup">
            <div className="navbar-nav flex" >
              <a className="nav-link text-light ms-3 fs-4" href="#">PRODUCT</a>
              <a className="nav-link text-light ms-3 fs-4" href="#">FEATURED</a>
              <a className="nav-link text-light ms-3 fs-4" href="#">FUNATICS!</a>
            </div>
            </div>
            <div className=""style={{justifyContent: "right"}} >
            <form className=" d-flex border border-0 me-5"role="search">
        <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success text-light border border-0 " type="submit">Search</button>
      </form>
            </div>
          
        </div>
      </nav>
	);
};

export default Navbar;