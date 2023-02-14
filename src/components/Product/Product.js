import "./Product.css";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = ({ handleAddToCart, product }) => {
  //   console.log(props);
  const { img, name, price, ratings, id, seller } = product;
  //   const { handleAddToCart } = handleAddToCart;
  return (
    <div className="product">
      <div>
        <div>
          <img src={img} alt="" />
        </div>

        <div className="product-info">
          <p className="product-name">{name}</p>
          <p>Price: ${price}</p>
          <p>
            <small>Manufacturer: {seller}</small>
          </p>
          <p>
            <small>Rating: {ratings} stars</small>
          </p>
        </div>
        <button className="btn-cart" onClick={() => handleAddToCart(product)}>
          <p className="btn-text">Add to Cart</p>
          <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
};

export default Product;
