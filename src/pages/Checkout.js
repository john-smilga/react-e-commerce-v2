import React from "react";
import { CartContext } from "../context/cart";
import EmptyCart from "../components/Cart/EmptyCart";
export default function Checkout() {
  const { cart } = React.useContext(CartContext);

  if (cart.length === 0) return <EmptyCart />;
  return <h1>checkout page</h1>;
}
