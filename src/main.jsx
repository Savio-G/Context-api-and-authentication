import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home.jsx';
import Login from './Components/Login.jsx';
import Register from './Components/Register.jsx';
import Authcontext from './Components/Providers/Authcontext.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/Login",
        element: <Login></Login>
      },
      {
        path: "/Register",
        element: <Register></Register>
      }
    ]
  },
]);

// Here Authcontext is a component that contains the code for ContextApi. Since I want to access the information of context Api from everywhere I am wrapping the router within it since using routers we can access the whole app.[Router is the children here]
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authcontext>
      <RouterProvider router={router} />
    </Authcontext>
  </React.StrictMode>,
)
