import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import Home from './components/home/Home';
import Detail from './components/details/Detail';
import DashbordMain from './components/deshbord/DashbordMain';
import Products from './components/Cards/Products';
import { CartProvider } from './components/CartProvider';
import ErrorPage from './Errorpage';
import AddtoCartsItem from './components/AddtoCartsItem';
import Addtowishlist from './components/Addtowishlist';
//import { CartProvider } from './CartContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
        loader: () => fetch('/categories.json'),
        children: [
          {
            path: "", // Default route for displaying all products
            element: <Products />, // This will render all products
            loader: () => fetch('/data.json') // Fetch all products here
          },
          {
            path: "/cards/:category",
            element: <Products />,
            loader: () => fetch('/data.json')
          },
          {
            path: "*",
            element: <ErrorPage />,
        
          }
        ]
      },
      {
        path: "cards/:category/detail/:product_id",
        element: <Detail />,
        loader: () => fetch('/data.json'),
  

      },
  
      {
        path: "/deshbord",
        element: <DashbordMain />,
        children:[{
             path:  "/deshbord/addtocart",
            element: <AddtoCartsItem />,
        },
        {
          path:  "/deshbord/addtowish",
         element: <Addtowishlist/>,
       }
      ]
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>

      <CartProvider>
    <RouterProvider router={router} />
    </CartProvider>
  
  </StrictMode>
);
