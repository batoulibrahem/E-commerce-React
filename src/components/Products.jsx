import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
import { NavLink, useLocation } from "react-router-dom";

function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get("search")?.toLowerCase() || "";

  useEffect(() => {
    let componentMounted = true;
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        const jsonData = await response.json();
        setData(jsonData);
        setFilter(jsonData);
        setLoading(false);
      }
    };
    getProducts();

    return () => {
      componentMounted = false;
    };
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const filteredBySearch = data.filter((product) =>
        product.title.toLowerCase().includes(searchTerm)
      );
      setFilter(filteredBySearch);
    } else {
      setFilter(data);
    }
  }, [searchTerm, data]);

  const Loading = () => (
    <>
      {[...Array(4)].map((_, i) => (
        <div className="col-md-3" key={i}>
          <Skeleton height={350} />
        </div>
      ))}
    </>
  );

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  const ShowProducts = () => (
    <>
      <div className="text-center mb-4">
        <button className="btn btn-outline-light me-2" onClick={() => setFilter(data)}>All</button>
        <button className="btn btn-outline-success me-2" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
        <button className="btn btn-outline-danger me-2" onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
        <button className="btn btn-outline-warning me-2" onClick={() => filterProduct("jewelery")}>Jewelery</button>
        <button className="btn btn-outline-info me-2" onClick={() => filterProduct("electronics")}>Electronics</button>
      </div>

      <div className="row">
        {filter.length > 0 ? (
          filter.map((product) => (
            <div className="col-md-3 mb-4" key={product.id}>
              <div className="card h-100 text-center p-3">
                <img src={product.image} className="card-img-top" alt={product.title} height="250px" />
                <div className="card-body">
                  <h5 className="card-title">{product.title.substring(0, 30)}...</h5>
                  <p className="card-text">${product.price}</p>
                  <NavLink to={`/products/${product.id}`} className="btn btn-primary">Buy Now</NavLink>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-muted">No products found matching "{searchTerm}"</p>
        )}
      </div>
    </>
  );

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12 mb-5">
          <h1 className="display-6 fw-bold">Latest Products</h1>
        </div>
      </div>
      <hr />
      <div className="row justify-content-center">
        {loading ? <Loading /> : <ShowProducts />}
      </div>
    </div>
  );
}

export default Products;
