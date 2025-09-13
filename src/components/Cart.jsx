import React, { useContext } from "react";
import CartContext from "../context/CartContext";

function Cart() {
  const { cart, dispatch } = useContext(CartContext);

  const handleRemove = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  const totalPrice = cart
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div className="container my-5">
      <h2 className="mb-4">🛒 Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="card mb-3 p-3">
              <div className="row g-0 align-items-center">
                <div className="col-md-2">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="img-fluid"
                  />
                </div>
                <div className="col-md-8">
                  <h5>{item.title}</h5>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: ${item.price}</p>
                </div>
                <div className="col-md-2 text-end">
                  <button
                    className="btn btn-danger"
                    onClick={() => handleRemove(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="text-end mt-4">
            <h4 className="fw-bold text-success">
              🎁 Total Purchase Value:{" "}
              <span className="text-dark">${totalPrice}</span>
            </h4>
            <p className="text-muted fst-italic">
              We're delighted to have you with us — your cart speaks volumes of
              your refined taste and style.
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
