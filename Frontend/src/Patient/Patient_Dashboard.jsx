import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import i18n from "../i18nDoctorDash";
import { useTranslation } from "react-i18next";

const Patient_Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [appointmentCount, setAppointmentCount] = useState(0);
  const { t } = useTranslation(); 

  useEffect(() => {
    async function getCountAppointment() {
      const resp = await axios.get("/api/user/patient/all-patient-appointment-count");
      setAppointmentCount(resp.data.allAppointmentsCount);
      console.log("Count of appointment = ",resp);
    }
  
    getCountAppointment();
  },[])
  

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative grid grid-cols-1 md:grid-cols-[300px_1fr] lg:grid-cols-[300px_1fr] xl:grid-cols-[300px_1fr] grid-rows-[80px_1fr] gap-2 p-4 bg-[#195085] h-screen">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-fit min-h-full bg-[#0a2035] text-white p-4 rounded-xl transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 md:relative md:translate-x-0 sm:row-span-2 md:row-span-2 lg:row-span-2 xl:row-span-2 sm:w-[300px] w-[250px]`}
        // style={{ width: "300px" }}
      >
        <div className="mb-4 flex justify-between items-center">
        <div className=" mx-4 px-4 font-raleway text-2xl font-think">MedLinea</div>
          {/* Close button for mobile */}
          <button className="md:hidden text-white" onClick={toggleSidebar}>
            &times; {/* Close Icon */}
          </button>
        </div>
        <Link to={"/user/patient/dashboard/manage-appoinment"}><div className="border-2 border-black my-2 mx-4 py-2 px-5 rounded-lg font-bold bg-[#EDE9E3] text-slate-800 hover:-translate-y-1 shadow-[0px_0px_0px_1px_#206ef6] hover:shadow-[0px_0px_10px_2px_#206ef6] duration-300">{t("appointmentManagement")}</div></Link>
        <a href="http://localhost:5174/bloodreport"><div className="border-2 border-black my-2 mx-4 py-2 px-5 rounded-lg font-bold bg-[#EDE9E3] text-slate-800 hover:-translate-y-1 shadow-[0px_0px_0px_1px_#206ef6] hover:shadow-[0px_0px_10px_2px_#206ef6] duration-300"> {t("personalChatBot")}</div></a>
        <Link to={"/user/patient/dashboard/prescription-billing-history"}><div className="border-2 border-black my-2 mx-4 py-2 px-5 rounded-lg font-bold bg-[#EDE9E3] text-slate-800 hover:-translate-y-1 shadow-[0px_0px_0px_1px_#206ef6] hover:shadow-[0px_0px_10px_2px_#206ef6] duration-300">{t("prescriptionsBillingHistory")}</div></Link>
        <Link to={"/user/patient/dashboard/medicine-compare"}><div className="border-2 border-black my-2 mx-4 py-2 px-5 rounded-lg font-bold bg-[#EDE9E3] text-slate-800 hover:-translate-y-1 shadow-[0px_0px_0px_1px_#206ef6] hover:shadow-[0px_0px_10px_2px_#206ef6] duration-300">{t("medicineCompare")}</div></Link>
        <div className="border-2 border-black my-2 mx-4 py-2 px-5 rounded-lg font-bold bg-[#EDE9E3] text-slate-800 hover:-translate-y-1 shadow-[0px_0px_0px_1px_#206ef6] hover:shadow-[0px_0px_10px_2px_#206ef6] duration-300">{t("messagingNotifications")}</div>
        <div className="border-2 border-black my-2 mx-4 py-2 px-5 rounded-lg font-bold bg-[#EDE9E3] text-slate-800 hover:-translate-y-1 shadow-[0px_0px_0px_1px_#206ef6] hover:shadow-[0px_0px_10px_2px_#206ef6] duration-300">{t("reportsAnalytics")}</div>
        <div className="border-2 border-black my-2 mx-4 py-2 px-5 rounded-lg font-bold bg-[#EDE9E3] text-slate-800 hover:-translate-y-1 shadow-[0px_0px_0px_1px_#206ef6] hover:shadow-[0px_0px_10px_2px_#206ef6] duration-300">{t("settingsPreferences")}</div>
        <div className="border-2 border-black my-2 mx-4 py-2 px-5 rounded-lg font-bold bg-[#EDE9E3] text-slate-800 hover:-translate-y-1 shadow-[0px_0px_0px_1px_#206ef6] hover:shadow-[0px_0px_10px_2px_#206ef6] duration-300">{t("feedbackSupport")}</div>
      </div>

      {/* Header */}
      <div className="bg-[#0a2035] p-4 rounded-xl flex justify-between items-center ">
      <button onClick={() => i18n.changeLanguage("hi")}>हिंदी</button>
<button onClick={() => i18n.changeLanguage("en")}>English</button>

        <input type="text" className="border-2 border-[#6bb1f2] sm:px-4 sm:py-2 px-2 py-1 w-40 sm:w-auto  rounded-lg" placeholder="Search here..."/>
        
        <div className="flex space-x-4">
          <Link to="/user/patient/profile"><button className="border-2 border-[#6bb1f2] px-4 py-2 rounded-lg bg-[#EDE9E3] hover:-translate-y-1 shadow-[0px_0px_0px_1px_#206ef6] hover:shadow-[0px_0px_10px_2px_#206ef6] duration-300" >{t("profile")}</button></Link>
          <Link to="/user/commonarea"><button className="border-2 border-[#6bb1f2] px-4 py-2 rounded-lg bg-[#EDE9E3] hover:-translate-y-1 shadow-[0px_0px_0px_1px_#206ef6] hover:shadow-[0px_0px_10px_2px_#206ef6] duration-300" >{t("commonArea")}</button></Link>
          <div className="md:hidden  ">
          <button
            className="border-2 border-[#6bb1f2] px-4 py-2 rounded-lg cursor-pointer bg-[#EDE9E3]"
            onClick={toggleSidebar}
          >
            &#x22EE; {/* 3 Dots Icon */}
          </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 bg-[#0a2035] text-white rounded-xl">
  {/* Card 1 */}
  <div className="flex flex-col items-center justify-between border-2 border-[#6bb1f2] bg-[#236db3] p-6 rounded-lg  h-full shadow-[0px_0px_5px_1px_#206ef6] hover:shadow-[0px_0px_15px_4px_#206ef6] duration-300">
    <div className="bg-[#bad6eb] text-3xl font-semibold text-black rounded-full h-16 w-16 flex items-center justify-center mb-4">
      {appointmentCount}
    </div>
    <div className="text-lg font-bold text-center">{t("totalAppointments")}</div>
  </div>

  {/* Card 2 */}
  <div className="flex flex-col items-center justify-between border-2 border-[#6bb1f2] bg-[#236db3] p-6 rounded-lg h-full shadow-[0px_0px_5px_1px_#206ef6] hover:shadow-[0px_0px_15px_4px_#206ef6] duration-300">
    <div className="bg-[#bad6eb] text-3xl font-semibold text-black rounded-full h-16 w-16 flex items-center justify-center mb-4">
      0
    </div>
    <div className="text-lg font-bold text-center">{t("ongoingAppointments")}</div>
  </div>

  {/* Card 3 */}
  {/* <div className="flex flex-col items-center justify-between border-2 border-[#6bb1f2] bg-[#236db3] p-6 rounded-lg h-full shadow-[0px_0px_5px_1px_#206ef6] hover:shadow-[0px_0px_15px_4px_#206ef6] duration-300">
    <div className="bg-[#bad6eb] text-3xl font-semibold text-black rounded-full h-16 w-16 flex items-center justify-center mb-4">
      0
    </div>
    <div className="text-lg font-bold text-center">Other Stats</div>
  </div> */}

  {/* Card 4 */}
  {/* <div className="flex flex-col items-center justify-between border-2 border-[#6bb1f2] bg-[#236db3] p-6 rounded-lg h-full shadow-[0px_0px_5px_1px_#206ef6] hover:shadow-[0px_0px_15px_4px_#206ef6] duration-300">
    <div className="bg-[#bad6eb] text-3xl font-semibold text-black rounded-full h-16 w-16 flex items-center justify-center mb-4">
      0
    </div>
    <div className="text-lg font-bold text-center">Other Stats</div>
  </div> */}
</div>
    </div>
  );
};

export default Patient_Dashboard;
