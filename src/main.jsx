import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Main from './components/Layout/Main';
import Header from './components/Header/Header';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Orders from './components/Orders/Orders';
import Checkout from './components/Checkout/Checkout';
import Grandapa from './components/Grandpa/Grandapa';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/Home',
        element: <Home></Home>,
        loader: ()=> fetch('tshirts.json'),
      },
      {
        path: '/Contact',
        element: <Contact></Contact>,
      },
      {
        path: '/About',
        element: <About></About>,
      },
      {
        path: '/Orders',
        element: <Orders></Orders>,
      },
      {
        path: '/Checkout',
        element: <Checkout></Checkout>,
      },
      {
        path: '/Grandpa',
        element: <Grandapa></Grandapa>
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
