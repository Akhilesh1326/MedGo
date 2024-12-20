import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { Link } from "react-router-dom";
import axios from "axios";
import { useTranslation } from "react-i18next";  // Import for translations
import i18n from "../i18nDoctorDash";

const Doctor_Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [offlineAppointmentCount, setOfflineAppointmentCount] = useState(0);
  const [onlineAppointmentCount, setOnlineAppointmentCount] = useState(0);
  const { t } = useTranslation();


  // const [sendMsg, setSendMsg] = useState("");



  useEffect(() => {
    const socket = io("http://localhost:8000");

    socket.on('connect', () => {
      console.log("Socke is connected");
    })
    return () => {
      socket.disconnect();
    };

  }, [])

  useEffect(() => {
    async function getTotalAppointments() {
      const response = await axios.get("/api/doctor/dashboard/appointment-count");
      console.log("Total appointment of doctor = ", response)
      console.log(response.data.OnlineAppointmentCount)
      console.log(response.data.OfflineAppointmentCount)
      setOfflineAppointmentCount(response.data.OfflineAppointmentCount);
      setOnlineAppointmentCount(response.data.OnlineAppointmentCount);
    }
    getTotalAppointments();
  }, [])



  // send message to server (web-socket)
  // const sendMessage = () =>{
  //   const socket = io("http://localhost:8000");

  //   const msg = [
  //   {
  //     id: uuid(),
  //     main: sendMsg,
  //     date: "18-aug-2024",
  //     name: "Dr. Akhilesh"
  //   }
  // ]
  //   socket.emit('client-message', msg);
  //   console.log("Message Sent");
  // }


  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative grid grid-cols-1 md:grid-cols-[300px_1fr] lg:grid-cols-[300px_1fr] xl:grid-cols-[300px_1fr] grid-rows-[80px_1fr] gap-2 p-4 bg-[#195085] h-screen">

      <div
        className={`fixed top-0 left-0 h-fit min-h-full bg-[#0a2035] text-white p-4 rounded-xl transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 md:relative md:translate-x-0 sm:row-span-2 md:row-span-2 lg:row-span-2 xl:row-span-2 sm:w-[300px] w-[250px]`}
      >
        <div className="mb-4 flex justify-between items-center">
          <div className=" my-2 mx-4 px-4 py-2 font-raleway text-2xl font-think">MedLinea</div>

          <button className="md:hidden text-white" onClick={toggleSidebar}>&times;</button>
        </div>
        <Link to="/user/doctor/dashboard/manage-appoinment"><div className="border-2 border-black my-2 mx-4 py-2 px-5 rounded-lg font-bold bg-[#EDE9E3] text-slate-800 hover:-translate-y-1 shadow-[0px_0px_0px_1px_#206ef6] hover:shadow-[0px_0px_10px_2px_#206ef6] duration-300">{t("appointmentManagement")}</div></Link>
        <Link to="/user/doctor/dashboard/manage-patients"><div className="border-2 border-black my-2 mx-4 py-2 px-5 rounded-lg font-bold bg-[#EDE9E3] text-slate-800 hover:-translate-y-1 shadow-[0px_0px_0px_1px_#206ef6] hover:shadow-[0px_0px_10px_2px_#206ef6] duration-300">{t("patientManagement")}</div></Link>
        <Link to="/user/doctor/dashboard/manage-prescription"><div className="border-2 border-black my-2 mx-4 py-2 px-5 rounded-lg font-bold bg-[#EDE9E3] text-slate-800 hover:-translate-y-1 shadow-[0px_0px_0px_1px_#206ef6] hover:shadow-[0px_0px_10px_2px_#206ef6] duration-300">{t(" prescriptionManagement")}</div></Link>
        <Link to="/user/doctor/dashboard/manage-billing"><div className="border-2 border-black my-2 mx-4 py-2 px-5 rounded-lg font-bold bg-[#EDE9E3] text-slate-800 hover:-translate-y-1 shadow-[0px_0px_0px_1px_#206ef6] hover:shadow-[0px_0px_10px_2px_#206ef6] duration-300">{t("billing")}</div></Link>
        <Link to="/user/doctor/dashboard/history-patient"><div className="border-2 border-black my-2 mx-4 py-2 px-5 rounded-lg font-bold bg-[#EDE9E3] text-slate-800 hover:-translate-y-1 shadow-[0px_0px_0px_1px_#206ef6] hover:shadow-[0px_0px_10px_2px_#206ef6] duration-300">{t("historyOfPatients")} </div></Link>
        <Link to="/user/doctor/dashboard/lab-report-management"><div className="border-2 border-black my-2 mx-4 py-2 px-5 rounded-lg font-bold bg-[#EDE9E3] text-slate-800 hover:-translate-y-1 shadow-[0px_0px_0px_1px_#206ef6] hover:shadow-[0px_0px_10px_2px_#206ef6] duration-300">{t("labReportManagement")}</div></Link>
        <Link to="/user/doctor/dashboard/form-fill-by-patient"><div className="border-2 border-black my-2 mx-4 py-2 px-5 rounded-lg font-bold bg-[#EDE9E3] text-slate-800 hover:-translate-y-1 shadow-[0px_0px_0px_1px_#206ef6] hover:shadow-[0px_0px_10px_2px_#206ef6] duration-300">{t("taskAndToDo")}</div></Link>
        <div className="border-2 border-black my-2 mx-4 py-2 px-5 rounded-lg font-bold bg-[#EDE9E3] text-slate-800 hover:-translate-y-1 shadow-[0px_0px_0px_1px_#206ef6] hover:shadow-[0px_0px_10px_2px_#206ef6] duration-300">{t("settings")}</div>
        <div className="border-2 border-black my-2 mx-4 py-2 px-5 rounded-lg font-bold bg-[#EDE9E3] text-slate-800 hover:-translate-y-1 shadow-[0px_0px_0px_1px_#206ef6] hover:shadow-[0px_0px_10px_2px_#206ef6] duration-300">{t("feedback")}</div>
      </div>

      {/* Header */}
      <div className="bg-[#0a2035] p-4 rounded-xl flex justify-between items-center ">
        <input type="text" className="border-2 border-[#6bb1f2] sm:px-4 sm:py-2 px-2 py-1 w-40 sm:w-auto  rounded-lg" placeholder="Search here..." />
        <button onClick={() => i18n.changeLanguage("hi")}>हिंदी</button>
        <button onClick={() => i18n.changeLanguage("en")}>English</button>

        <div className="flex space-x-4">
          <Link to="/user/doctor/profile"><div className="border-2 border-[#6bb1f2] px-4 py-2 rounded-lg bg-[#EDE9E3] hover:-translate-y-1 shadow-[0px_0px_0px_1px_#206ef6] hover:shadow-[0px_0px_10px_2px_#206ef6] duration-300" >{t("profile  ")}</div></Link>
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
            {onlineAppointmentCount}
          </div>
          <div className="text-lg font-bold text-center">{t("onlineAppointments")}</div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center justify-between border-2 border-[#6bb1f2] bg-[#236db3] p-6 rounded-lg h-full shadow-[0px_0px_5px_1px_#206ef6] hover:shadow-[0px_0px_15px_4px_#206ef6] duration-300">
          <div className="bg-[#bad6eb] text-3xl font-semibold text-black rounded-full h-16 w-16 flex items-center justify-center mb-4">
            {offlineAppointmentCount}
          </div>
          <div className="text-lg font-bold text-center">{t("offlineAppointments")}</div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center justify-between border-2 border-[#6bb1f2] bg-[#236db3] p-6 rounded-lg h-full shadow-[0px_0px_5px_1px_#206ef6] hover:shadow-[0px_0px_15px_4px_#206ef6] duration-300">
          <div className="bg-[#bad6eb] text-3xl font-semibold text-black rounded-full h-16 w-16 flex items-center justify-center mb-4">
            0
          </div>
          <div className="text-lg font-bold text-center">{t("completedPatients")}</div>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col items-center justify-between border-2 border-[#6bb1f2] bg-[#236db3] p-6 rounded-lg h-full shadow-[0px_0px_5px_1px_#206ef6] hover:shadow-[0px_0px_15px_4px_#206ef6] duration-300">
          <div className="bg-[#bad6eb] text-3xl font-semibold text-black rounded-full h-16 w-16 flex items-center justify-center mb-4">
            0
          </div>
          <div className="text-lg font-bold text-center">{t("otherStats")}s</div>
        </div>
      </div>

    </div>
  );
};

export default Doctor_Dashboard;
