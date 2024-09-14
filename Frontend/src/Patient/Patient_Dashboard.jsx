import { useState } from "react";
// import {io} from "socket.io-client";
// import { v4 as uuid } from 'uuid';
import { Link } from "react-router-dom";
// import bg from "../assets/upscale4.jpeg"

const Patient_Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative grid grid-cols-1 md:grid-cols-[300px_1fr] lg:grid-cols-[300px_1fr] xl:grid-cols-[300px_1fr] grid-rows-[80px_1fr] gap-2 p-4 bg-[#edf1f6] h-screen">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-fit min-h-full bg-[#262c9c] text-white p-4 rounded-xl transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 md:relative md:translate-x-0 sm:row-span-2 md:row-span-2 lg:row-span-2 xl:row-span-2 sm:w-[300px] w-[250px]`}
        // style={{ width: "300px" }}
      >
        <div className="mb-4 flex justify-between items-center">
          <div className="border-2 border-black my-2 mx-4 px-4 py-2">Logo</div>
          {/* Close button for mobile */}
          <button className="md:hidden text-white" onClick={toggleSidebar}>
            &times; {/* Close Icon */}
          </button>
        </div>
        <Link to={"/user/patient/dashboard/manage-appoinment"}><div className="border-2 border-black my-2 mx-4 py-2 px-5 rounded-lg font-bold bg-[#EDE9E3] text-slate-800 hover:bg-[#d0e3ff]">Appointment Management</div></Link>
        <div className="border-2 border-black my-2 mx-4 py-2 px-5 rounded-lg font-bold bg-[#EDE9E3] text-slate-800 hover:bg-[#d0e3ff]">Personal Chat-bot</div>
        <div className="border-2 border-black my-2 mx-4 py-2 px-5 rounded-lg font-bold bg-[#EDE9E3] text-slate-800 hover:bg-[#d0e3ff]">Medical Records and Notes</div>
        <div className="border-2 border-black my-2 mx-4 py-2 px-5 rounded-lg font-bold bg-[#EDE9E3] text-slate-800 hover:bg-[#d0e3ff]">Messaging and Notifications</div>
        <div className="border-2 border-black my-2 mx-4 py-2 px-5 rounded-lg font-bold bg-[#EDE9E3] text-slate-800 hover:bg-[#d0e3ff]">Reports and Analytics</div>
        <div className="border-2 border-black my-2 mx-4 py-2 px-5 rounded-lg font-bold bg-[#EDE9E3] text-slate-800 hover:bg-[#d0e3ff]">Task and To-Do List</div>
        <div className="border-2 border-black my-2 mx-4 py-2 px-5 rounded-lg font-bold bg-[#EDE9E3] text-slate-800 hover:bg-[#d0e3ff]">Settings and Preferences</div>
        <div className="border-2 border-black my-2 mx-4 py-2 px-5 rounded-lg font-bold bg-[#EDE9E3] text-slate-800 hover:bg-[#d0e3ff]">Feedback and Support</div>
      </div>

      {/* Header */}
      <div className="bg-[#334eac] p-4 rounded-xl flex justify-between items-center ">
        <input type="text" className="border-2 border-blue-400 sm:px-4 sm:py-2 px-2 py-1 w-40 sm:w-auto  rounded-lg" placeholder="Search here..."/>
        
        <div className="flex space-x-4">
          <Link to="/user/patient/profile"><button className="border-2 border-blue-400 px-4 py-2 rounded-lg bg-[#EDE9E3]" >prof</button></Link>
          <Link to="/user/commonarea"><button className="border-2 border-blue-400 px-4 py-2 rounded-lg bg-[#EDE9E3]" >common Area</button></Link>
          <div className="md:hidden  ">
          <button
            className="border-2 border-blue-400 px-4 py-2 rounded-lg cursor-pointer bg-[#EDE9E3]"
            onClick={toggleSidebar}
          >
            &#x22EE; {/* 3 Dots Icon */}
          </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-2  sm:grid-cols-3 gap-3 bg-[#7096d1] text-white p-4 rounded-xl h-fit">
        <div className="flex flex-col  w-full text-center border-4 border-blue-400 bg-[#334eac] rounded-xl h-full">
          <div className="bg-[#bad6eb] rounded-lg py-4">0</div>
          <div className="font-bold px-1 py-6 w-40 h self-center">Taken Appoinments</div>
        </div> 
        <div className="flex flex-col w-full text-center border-4 border-blue-400 bg-[#334eac] rounded-xl h-fit">
          <div className="bg-[#bad6eb] rounded-lg py-4">0</div>
          <div className="font-bold px-2 py-6 w-40 h self-center">Live Appointment</div>
        </div>
        <div className="flex flex-col w-full text-center border-4 border-blue-400 bg-[#334eac] rounded-xl h-fit">
          <div className="bg-[#bad6eb] rounded-lg py-4">0</div>
          <div className="font-bold px-2 py-6 w-40 h self-center">Total other stats</div>
        </div>
        <div className="flex flex-col w-full text-center border-4 border-blue-400 bg-[#334eac] rounded-xl h-fit">
          <div className="bg-[#bad6eb] rounded-lg py-4">0</div>
          <div className="font-bold px-2 py-6 w-40 h self-center">Total other stats</div>
        </div>
      </div>
    </div>
  );
};

export default Patient_Dashboard;
