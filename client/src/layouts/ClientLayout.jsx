import React from "react";
import { Outlet } from "react-router-dom";

const ClientLayout = () => {
  return (
    <div className="client-layout">
      <h2>Clients</h2>
      <Outlet />
    </div>
  );
};

export default ClientLayout;
