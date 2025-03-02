import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
 
import PatientSignIn from "./Patient/Patient_SignIn";
import PatientLoginCred from "./Patient/Patient_Login_Cred";
import PatientPI from "./Patient/Patient_PI";
import PatientValidation from "./Patient/Patient_Validation";
import PatientMedcialInformation from "./Patient/Patient_Medical_Information"
import PatientDashboard from "./Patient/Patient_Dashboard";
import Profile from "./Patient/Dashboard/Profile";
import LogInPatient from "./Patient/LogInPatient"
import ManageAppointmentForPatient from "./Patient/Dashboard/ManageAppointment";
import PrescriptionBillingHistory from "./Patient/Dashboard/PrescriptionBillingHistory";
import MedicineCompare from "./Patient/Dashboard/MedicineCompare";

import DoctorSignIn from "./Doctor/Doctor_SignIn";
import DoctorLoginCred from './Doctor/Doctor_Login_Cred';
import DoctorPI from './Doctor/Doctor_PI';
import DoctorValidation from './Doctor/Doctor_Validation';
import DoctorDashboard from './Doctor/Doctor_Dashboard';
import DoctorProfile from "./Doctor/Doctor_Profile";
import ManageAppoinment from "./Doctor/Dashboard/ManageAppoinment";
import PatientManagment from "./Doctor/Dashboard/PatientManagement";
import PriscriptionManagement from "./Doctor/Dashboard/PriscriptionManagement";
import DoctorBilling from "./Doctor/Dashboard/DoctorBilling";
import PatientHistory from "./Doctor/Dashboard/PatientHistory";
import LabReportManagement from "./Doctor/Dashboard/LabReportManagement";
import ByPatientFormFill from "./Doctor/Dashboard/ByPatientFormFill";


import CheckUser from './Components/CheckUser';
import Home from './Components/Home';
import CommonArea from "./Components/CommonArea";
import CommonLogin from "./Components/CommonLogin";
import CheckLoginUser from "./Components/CheckLoginUser";
import AboutUs from "./Components/AboutUs";
import ByPatientForm from "./Components/ByPatientForm";

const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/user/doctor/signin", element: <DoctorSignIn /> },
    { path: "/user/doctor/login-credentials", element: <DoctorLoginCred /> },
    { path: "/user/doctor/personal-information", element: <DoctorPI /> },
    { path: "/user/doctor/validation", element: <DoctorValidation /> },
    { path: "/user/doctor/dashboard", element: <DoctorDashboard /> },
    { path: "/user/doctor/profile", element: <DoctorProfile />},
    { path: "/user/doctor/dashboard/manage-appoinment", element: <ManageAppoinment />},
    { path: "/user/doctor/dashboard/manage-patients", element: <PatientManagment />},
    { path: "/user/doctor/dashboard/manage-prescription", element: <PriscriptionManagement />},
    { path: "/user/doctor/dashboard/manage-billing", element: <DoctorBilling />},
    { path: "/user/doctor/dashboard/history-patient", element: <PatientHistory />},
    { path: "/user/doctor/dashboard/lab-report-management", element: <LabReportManagement />},
    { path: "/user/doctor/dashboard/form-fill-by-patient", element: <ByPatientFormFill />},

    
    { path: "/user/patient/signin", element: <PatientSignIn /> },
    { path: "/user/patient/login-credentials", element: <PatientLoginCred /> },
    { path: "/user/patient/personal-information", element: <PatientPI /> },
    { path: "/user/patient/validation", element: <PatientValidation /> },
    { path: "/user/patient/medical-informations", element: <PatientMedcialInformation /> },
    { path: "/user/patient/dashboard", element: <PatientDashboard /> },
    { path: "/user/patient/profile", element: <Profile />},
    { path: "/user/patient/login", element: <LogInPatient />},
    { path: "/user/patient/dashboard/manage-appoinment", element: <ManageAppointmentForPatient />},
    { path: "/user/patient/dashboard/prescription-billing-history", element: <PrescriptionBillingHistory />},
    { path: "/user/patient/dashboard/medicine-compare", element: <MedicineCompare />},
    
    { path: "/user/checkuser", element: <CheckUser /> },
    { path: "/user/commonarea", element: <CommonArea />},
    { path: "/user/login", element: <CommonLogin />},
    { path: "/user/check/login", element: <CheckLoginUser />},
    { path: "/user/aboutUs", element: <AboutUs />},
    { path: "/user/by-patient-form-fill", element: <ByPatientForm />},
]);

function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App;
