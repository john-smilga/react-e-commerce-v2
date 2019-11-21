import React from "react";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cart";
export default function CartList() {
  const { cart, total } = React.useContext(CartContext);
  if (cart.length === 0) {
    return (
      <section className="empty-cart section">
        <h2>empty cart ...</h2>
        <Link to="/products" className="btn btn-primary">
          fill it
        </Link>
      </section>
    );
  }
  return (
    <section className="cart-items section">
      <h2>your cart</h2>
      {cart.map(item => {
        return <CartItem key={item.id} {...item} />;
      })}
      <h2>total : ${total}</h2>
      <Link to="/checkout" className="btn btn-primary btn-block">
        checkout
      </Link>
    </section>
  );
}
