import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>Sallam</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/trucks">Trucks</NavLink>
          <NavLink to="/clients">Clients</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
