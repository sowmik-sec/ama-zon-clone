import "./Shop.css";

import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { addToDb, getStoredCart } from "../../utilities/fakedb";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    console.log("products load before fetch");
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log("products loaded");
      });
  }, []);

  useEffect(() => {
    console.log("Local Storage first line");
    const storedCart = getStoredCart();
    // console.log(storedCart);
    const savedCart = [];
    for (const id in storedCart) {
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
      // console.log(addedProduct);
    }
    setCart(savedCart);
    console.log("local storage finished");
  }, [products]);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.id);
  };

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            product={product}
            key={product.id}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
