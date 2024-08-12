// import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Patient_SignIn from "./Patient/Patient_SignIn"
import Patient_Login_Cred from "./Patient/Patient_Login_Cred"
import Patient_PI from "./Patient/Patient_PI"
import Patient_Validation from "./Patient/Patient_Validation";
import Paitent_Dashboard from "./Patient/Patient_Dashboard";


import Doctor_SignIn from "./Doctor/Doctor_SignIn"
import Doctor_Login_Cred from './Doctor/Doctor_Login_Cred';
import Doctor_PI from './Doctor/Doctor_PI';
import Doctor_Validation from './Doctor/Doctor_Validation';
import Doctor_Dashboard from './Doctor/Doctor_Dashboard';


import CheckUser from './Components/CheckUser';
import Home from './Components/Home';
const router = createBrowserRouter([
    {path:"/", element:<Home/>},
    {path:"/user/doctor/singin", element:<Doctor_SignIn/>},
    {path:"/user/doctor/login-credentials", element:<Doctor_Login_Cred/>},
    {path:"/user/doctor/personal-information", element:<Doctor_PI/>},
    {path:"/user/doctor/validation", element:<Doctor_Validation/>},
    {path:"/user/doctor/dashboard", element:<Doctor_Dashboard/>},
    {path:"/user/patient/signin", element:<Patient_SignIn/>},
    {path:"/user/patient/login-credentials", element:<Patient_Login_Cred/>},
    {path:"/user/patient/personal-information", element:<Patient_PI/>},
    {path:"/user/patient/validation", element:<Patient_Validation/>},
    {path:"/user/patient/dashboard", element:<Paitent_Dashboard/>},
    {path:"/user/checkuser", element:<CheckUser/>},
])

function App() {

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
