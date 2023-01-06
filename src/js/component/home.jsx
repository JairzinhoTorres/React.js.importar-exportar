import React from "react";
import Card from "./Card.jsx";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Footer from "./Footer.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<>
		<Navbar/>
		<div className="container "> 
		<div className="row">
		<Jumbotron/>
		</div>
		</div>
		<div className="container"> 
		<div className="row">
		<Card/> <Card/> <Card/> <Card/>
		</div>
		</div>
		<Footer/>
	
		</>
	);
};

export default Home;
