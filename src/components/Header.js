import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import CartLink from "./CartLink";
import LoginLink from "./LoginLink";
export default function Header() {
  return (
    <header className="header">
      <img src={logo} className="logo" alt="company logo" />
      <nav>
        <ul>
          <div>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/about">about</Link>
            </li>
            <li>
              <Link to="/products">products</Link>
            </li>
          </div>
          <div>
            <li>
              <LoginLink />
            </li>
            <li>
              <CartLink />
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}
