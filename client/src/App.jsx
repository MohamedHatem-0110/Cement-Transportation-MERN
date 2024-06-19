import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

// pages
import Home from './pages/Home'
import TruckLayout from './layouts/TruckLayout.jsx';

// layouts
import RootLayout from './layouts/RootLayout'
import NotFound from './pages/Notfound.jsx';
import Truck,{ addtruckAction, trucksloader } from './pages/Trucks/Truck.jsx';
import TruckDetails, { truckDetailloader } from './pages/Trucks/TruckDetails.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />

      <Route path="trucks" element={<TruckLayout />} action={addtruckAction} >
        <Route 
         index
         element={<Truck />} 
         loader={trucksloader}
        
         
         />
         <Route
          path=":truckId"
          element={<TruckDetails />}
          loader={truckDetailloader}

          />

      </Route>




      <Route path="*" element={<NotFound />} />


    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App