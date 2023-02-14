import "./Product.css";

import React from "react";

const Product = (props) => {
  console.log(props);
  const { img, name, price, ratings, id, seller } = props.product;
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
        <button className="btn-cart">
          <p>Add to Cart</p>
        </button>
      </div>
    </div>
  );
};

export default Product;
