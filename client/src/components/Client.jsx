import React from "react";
import "./Client.css";
const Client = ({ name, balance }) => {
  return (
    <div className="container">
      <span className="label">Name: {name}</span>

      <span className="label">Balance: {balance} EGP</span>
    </div>
  );
};

export default Client;
