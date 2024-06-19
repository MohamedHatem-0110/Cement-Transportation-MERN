import React from "react";
import { Outlet } from "react-router-dom";

const TransactionLayout = () => {
  return (
    <div className="transaction-layout">
      <h2>Transaction</h2>
      <Outlet />
    </div>
  );
};

export default TransactionLayout;
