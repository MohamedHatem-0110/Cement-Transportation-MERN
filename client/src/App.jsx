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
import Truck,{ trucksloader } from './pages/Trucks/Truck.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />

      <Route path="trucks" element={<TruckLayout />} >
        <Route 
         index
         element={<Truck />} 
         loader={trucksloader}
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