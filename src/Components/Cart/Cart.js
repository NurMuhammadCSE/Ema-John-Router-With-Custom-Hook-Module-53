import React from "react";
import Button from "react-bootstrap/esm/Button";
import "./Cart.css";

const Cart = (props) => {
  const { cart, clearCart } = props;
  // console.log(props.children);

  let total = 0;
  let shipping = 0;
  let quantity = 0;

  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
  }

  // const tax = total * 10 / 100;
  const tax = parseFloat((total * 0.1).toFixed(2));

  const grandTotal = parseInt(total + shipping + tax);
  return (
    <div className="cart">
      <h4>Order Summary</h4>
      <p>Selected Items: {cart.length}</p>
      <p>Total Price: ${total} </p>
      <p>Total Shipping: ${shipping}</p>
      <p>Tax: {tax}</p>
      <h5>Grand Total: {grandTotal}</h5>
      <Button className="btn btn warning m-3" onClick={clearCart}>Clear Cart</Button>
      {props.children}
    </div>
  );
};

export default Cart;
