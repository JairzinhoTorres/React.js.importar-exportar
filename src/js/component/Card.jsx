import React from "react";
const Card = () => {
	return (
        <div className="card col-3 mt-5 border border-0 " >
        <img src="https://cdn.shopify.com/s/files/1/1052/2158/products/63220_OnePiece_TonyTonyChopperSamurai_POP_GLAM-WEB.png?v=1669059858" className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Funko Chopper</h5>
          <p className="card-text mt-2">15,00 US$.</p>
          <a href="#" className="btn  bg-warning text-dark border border-0 mt-3">ADD TO CART</a>
        </div>
      </div>
	);
};

export default Card;