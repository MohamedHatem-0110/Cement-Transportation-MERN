import { Outlet } from "react-router-dom";

export default function TruckLayout() {
  return (
    <div>
      <h2>Trucks</h2>
      <Outlet />
    </div>
  );
}
