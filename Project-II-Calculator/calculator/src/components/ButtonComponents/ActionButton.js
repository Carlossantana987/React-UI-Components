import React from "react";
import "./Button.css";

const ActionButton = props => {
  return (
    <div className="actionbutton">
      <button>
        {" "}
        className= {`basicButtonStyles ${props.buttonStyles}`}
        {props.text}{" "}
      </button>
    </div>
  );
};

export default ActionButton;
