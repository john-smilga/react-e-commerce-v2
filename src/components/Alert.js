import React from "react";
import { FaWindowClose } from "react-icons/fa";
import { UserContext } from "../context/user";
export default function Alert() {
  const { alert, hideAlert } = React.useContext(UserContext);
  let css = "alert-container";
  if (alert.show) {
    css += " alert-show";
    if (alert.type === "danger") {
      css += " alert-danger";
    }
  }

  return (
    <div className={css}>
      <div className="alert">
        <p>{alert.show && alert.msg}</p>
        <button className="alert-close" onClick={hideAlert}>
          <FaWindowClose />
        </button>
      </div>
    </div>
  );
}
