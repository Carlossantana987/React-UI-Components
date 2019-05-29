import React from "react";
import "./Button.css";

const NumberButton = props => {
  return (
    <div>
      <button className={`basicButtonStyle ${props.buttonStyle}`}>
        {props.text}
      </button>
    </div>
  );
};

NumberButton.defaultProps = {
  buttonStyle: "white"
};

export default NumberButton;
