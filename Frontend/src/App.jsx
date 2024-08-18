import { createBrowserRouter, RouterProvider } from "react-router-dom";

import PatientSignIn from "./Patient/Patient_SignIn";
import PatientLoginCred from "./Patient/Patient_Login_Cred";
import PatientPI from "./Patient/Patient_PI";
import PatientValidation from "./Patient/Patient_Validation";
import PatientDashboard from "./Patient/Patient_Dashboard";

import DoctorSignIn from "./Doctor/Doctor_SignIn";
import DoctorLoginCred from './Doctor/Doctor_Login_Cred';
import DoctorPI from './Doctor/Doctor_PI';
import DoctorValidation from './Doctor/Doctor_Validation';
import DoctorDashboard from './Doctor/Doctor_Dashboard';

import CheckUser from './Components/CheckUser';
import Home from './Components/Home';
import CommonArea from "./Components/CommonArea";

const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/user/doctor/signin", element: <DoctorSignIn /> },
    { path: "/user/doctor/login-credentials", element: <DoctorLoginCred /> },
    { path: "/user/doctor/personal-information", element: <DoctorPI /> },
    { path: "/user/doctor/validation", element: <DoctorValidation /> },
    { path: "/user/doctor/dashboard", element: <DoctorDashboard /> },
    { path: "/user/patient/signin", element: <PatientSignIn /> },
    { path: "/user/patient/login-credentials", element: <PatientLoginCred /> },
    { path: "/user/patient/personal-information", element: <PatientPI /> },
    { path: "/user/patient/validation", element: <PatientValidation /> },
    { path: "/user/patient/dashboard", element: <PatientDashboard /> },
    { path: "/user/checkuser", element: <CheckUser /> },
    { path: "/user/commonarea", element: <CommonArea />},
]);

function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App;
