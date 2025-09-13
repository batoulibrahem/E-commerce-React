import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
import Products from "./Products";
import CartContext from "../context/CartContext";

import { useContext } from "react";

function Product() {
 const { dispatch } = useContext(CartContext);
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

const handleAddToCart = () => {
  dispatch({ type: "ADD_TO_CART", payload: product });
};

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const jsonData = await response.json();
      setProduct(jsonData);
      setLoading(false);
    };
    getProduct();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={400} />
        </div>
        <div className="col-md-3" style={{ lineHeight: 2 }}>
          <Skeleton height={50} width={300} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
          <Skeleton height={50} />
          <Skeleton height={150} />
          <Skeleton height={50} width={100} />
          <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
        </div>
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="row g-4 align-items-center" >
          <div className="col-md-6 text-center">
            <img
              src={product.image}
              className="img-fluid rounded shadow-sm"
              alt={product.title}
              style={{ maxHeight: "400px", objectFit: "contain" }}
            />
          </div>
          <div className="col-md-6">
            <h4 className="text-uppercase text-muted mb-2">{product.category}</h4>
            <h1 className="display-6 fw-semibold mb-3" style={{ color: "#212529" }}>
             {product.title}</h1>

            <p className="lead mb-2">
              Rating: {product.rating && product.rating.rate} <i className="fa fa-star text-warning ms-1"></i>
            </p>
            <h3 className="fw-bold text-success mb-4">${product.price}</h3>
            <p className="text-secondary mb-4">{product.description}</p>
            <div className="d-flex">
            
           <button className="btn btn-dark px-4 py-2 me-2" onClick={handleAddToCart}>
             Add To Cart
           </button>


              <NavLink to="/Cart" className="btn btn-outline-primary px-4 py-2">Go To Cart</NavLink>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="container py-5" style={{ backgroundColor: "#f9f9f9", borderRadius: "12px" }}>
        <div className="row py-4">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </>
  );
}

export default Product;
