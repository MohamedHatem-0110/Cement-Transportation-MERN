import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// pages
import Home from "./pages/Home";
import TruckLayout from "./layouts/TruckLayout.jsx";

import ClientLayout from "./layouts/ClientLayout.jsx";
import Clients, { clientsloader } from "./pages/Clients/Clients.jsx";

import Truck, { addtruckAction, trucksloader } from "./pages/Trucks/Truck.jsx";
import TruckDetails, {
  addTripAction,
  truckDetailloader,
} from "./pages/Trucks/TruckDetails.jsx";
import RootLayout from "./layouts/RootLayout.jsx";
import NotFound from "./pages/Notfound.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />

      <Route path="trucks" element={<TruckLayout />} action={addtruckAction}>
        <Route index element={<Truck />} loader={trucksloader} />
        <Route
          path=":truckId"
          element={<TruckDetails />}
          loader={truckDetailloader}
          action={addTripAction}
        />
      </Route>

      <Route path="clients" element={<ClientLayout />}>
        <Route index element={<Clients />} loader={clientsloader} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
