import React from "react";
import { FaWindowClose } from "react-icons/fa";
import { UserContext } from "../context/user";
export default function Alert() {
  const { alert, hideAlert } = React.useContext(UserContext);
  return (
    <div className={alert ? "alert-container alert-show" : "alert-container"}>
      <div className="alert">
        <p>{alert ? alert.text : null}</p>
        <button className="alert-close" onClick={hideAlert}>
          <FaWindowClose />
        </button>
      </div>
    </div>
  );
}
