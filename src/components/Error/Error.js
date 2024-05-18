import "./Error.css";
import errorImg from "../../images/error.gif";
import React from "react";

function Error() {
  return (
    <div className="error">
      Oh no! We've encountered an error!
      <img src={errorImg} alt="error" />
    </div>
  );
}

export default Error;
