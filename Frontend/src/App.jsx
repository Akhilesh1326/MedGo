import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Patient_SignIn from "./Patient/Patient_SignIn"
import Doctor_SignIn from "./Doctor/Doctor_SignIn"
import Doctor_Dashboard from './Doctor/Doctor_Dashboard';
import CheckUser from './Components/CheckUser';
import Home from './Components/Home';
const router = createBrowserRouter([
    {path:"/", element:<Home/>},
    {path:"/user/doctor/singin", element:<Doctor_SignIn/>},
    {path:"/user/patient/singin", element:<Patient_SignIn/>},
    {path:"/user/checkuser", element:<CheckUser/>},
    {path:"/user/doctor/dashboard", element:<Doctor_Dashboard/>},
])

function App() {

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
