import React from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/user";
import { CartContext } from "../context/cart";

export default function LoginLink() {
  const { user, userLogout } = React.useContext(UserContext);
  const { clearCart } = React.useContext(CartContext);
  if (user.token) {
    return (
      <button
        onClick={() => {
          userLogout();
          clearCart();
        }}
        className="login-btn"
      >
        logout
      </button>
    );
  }
  return <Link to="/login">login</Link>;
}
