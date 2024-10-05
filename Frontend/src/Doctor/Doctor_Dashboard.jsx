import { useEffect, useState } from "react";
import {io} from "socket.io-client";
import { v4 as uuid } from 'uuid';
import { Link } from "react-router-dom";

const Doctor_Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [sendMsg, setSendMsg] = useState("");



  useEffect(() => {
    const socket = io("http://localhost:8000");

    socket.on('connect',()=>{
      console.log("Socke is connected");
    })
    return () => {
      socket.disconnect();
  };

  }, [])


  // send message to server (web-socket)
  const sendMessage = () =>{
    const socket = io("http://localhost:8000");
    
    const msg = [
    {
      id: uuid(),
      main: sendMsg,
      date: "18-aug-2024",
      name: "Dr. Akhilesh"
    }
  ]
    socket.emit('client-message', msg);
    console.log("Message Sent");
  }
  

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
        <Link to="/user/doctor/dashboard/manage-appoinment"><div className="border-2 border-black my-2 mx-4 py-2 px-5 rounded-lg font-bold bg-[#EDE9E3] text-slate-800 hover:bg-[#d0e3ff]">Appointment Management</div></Link>
        <Link to="/user/doctor/dashboard/manage-patients"><div className="border-2 border-black my-2 mx-4 py-2 px-5 rounded-lg font-bold bg-[#EDE9E3] text-slate-800 hover:bg-[#d0e3ff]">Patient Management</div></Link>
        <Link to="/user/doctor/dashboard/manage-prescription"><div className="border-2 border-black my-2 mx-4 py-2 px-5 rounded-lg font-bold bg-[#EDE9E3] text-slate-800 hover:bg-[#d0e3ff]">Prescription Management</div></Link>
        <Link to="/user/doctor/dashboard/manage-billing"><div className="border-2 border-black my-2 mx-4 py-2 px-5 rounded-lg font-bold bg-[#EDE9E3] text-slate-800 hover:bg-[#d0e3ff]">Billing</div></Link>
        <Link to="/user/doctor/dashboard/history-patient"><div className="border-2 border-black my-2 mx-4 py-2 px-5 rounded-lg font-bold bg-[#EDE9E3] text-slate-800 hover:bg-[#d0e3ff]">History Of Patients </div></Link>
        <Link to="/user/doctor/dashboard/lab-report-management"><div className="border-2 border-black my-2 mx-4 py-2 px-5 rounded-lg font-bold bg-[#EDE9E3] text-slate-800 hover:bg-[#d0e3ff]">Lab Reports Management</div></Link>
        <div className="border-2 border-black my-2 mx-4 py-2 px-5 rounded-lg font-bold bg-[#EDE9E3] text-slate-800 hover:bg-[#d0e3ff]">Task and To-Do List</div>
        <div className="border-2 border-black my-2 mx-4 py-2 px-5 rounded-lg font-bold bg-[#EDE9E3] text-slate-800 hover:bg-[#d0e3ff]">Settings and Preferences</div>
        <div className="border-2 border-black my-2 mx-4 py-2 px-5 rounded-lg font-bold bg-[#EDE9E3] text-slate-800 hover:bg-[#d0e3ff]">Feedback and Support</div>
      </div>

      {/* Header */}
      <div className="bg-[#334eac] p-4 rounded-xl flex justify-between items-center ">
        <input type="text" className="border-2 border-blue-400 sm:px-4 sm:py-2 px-2 py-1 w-40 sm:w-auto  rounded-lg" placeholder="Search here..."/>
        
        <div className="flex space-x-4">
          <Link to="/user/doctor/profile"><div className="border-2 border-blue-400 px-4 py-2 rounded-lg bg-[#EDE9E3]" >Profile</div></Link>
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
          <div className="font-bold px-2 py-6 w-40 h self-center">Total Appoinments</div>
        </div> 
        <div className="flex flex-col w-full text-center border-4 border-blue-400 bg-[#334eac] rounded-xl h-fit">
          <div className="bg-[#bad6eb] rounded-lg py-4">0</div>
          <div className="font-bold px-2 py-6 w-40 h self-center">Total Patients</div>
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

export default Doctor_Dashboard;
