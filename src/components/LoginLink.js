import React from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/user";

export default function LoginLink() {
  const { user, userLogout } = React.useContext(UserContext);
  if (user.token) {
    return (
      <button onClick={userLogout} className="login-btn">
        logout
      </button>
    );
  }
  return <Link to="/login">login</Link>;
}
