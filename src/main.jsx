import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Error from './Components/Error/Error';
import Login from './Components/Log/Login';
import Addcart from './Components/AddCart/Addcart';
import Phone from './Components/Phone/Phone';

const router = createBrowserRouter([
{
  path:'/',
  element:<Root></Root>,
  errorElement:<Error></Error>,
  children:[
    {
      path:'/',
      element:<Home></Home>,
      loader:()=>fetch('/Phone.json')
    },
    {
    path:'/addcart',
    element:<Addcart></Addcart>
    },
    {
      path:"/login",
      element:<Login></Login>
    },
    {
      path:"/phone/:id",
      element:<Phone></Phone>,
      loader:()=>fetch('/Phone.json')
    }
  ]
}
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
