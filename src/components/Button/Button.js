import React from "react";
import "./Button.css";
const Button = (props) => {
  return (
    <>
      <div className="divH1">
        <h1>Expense Tracker</h1>
      </div>
      {props.show ? (
        <div onClick={props.close} className="back-drop"></div>
      ) : null}
      <div className="addBtn">
        <button onClick={() => props.setShow(true)} className="btn-openModal">
          Add Expense
        </button>
      </div>
    </>
  );
};

export default Button;
