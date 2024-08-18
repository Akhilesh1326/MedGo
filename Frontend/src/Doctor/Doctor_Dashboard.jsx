import { useEffect, useState } from "react";
import {io} from "socket.io-client";
import { v4 as uuid } from 'uuid';

const Doctor_Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [socketMsg, setSocketMsg] = useState("");
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

  const handleSendMsg = (e) =>{
    setSendMsg(e.target.value);
  }

  // send message to server
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
    <div className="relative sm:h-screen grid grid-cols-1 sm:grid-cols-1 md:grid-cols-[250px_1fr] lg:grid-cols-[250px_1fr] xl:grid-cols-[300px_1fr] grid-rows-[80px_1fr] gap-2 p-4">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white p-4 rounded-xl transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 sm:relative sm:translate-x-0 sm:row-span-2 md:row-span-2 lg:row-span-2 xl:row-span-2 sm:w-[300px] w-[250px]`}
        // style={{ width: "300px" }}
      >
        <div className="mb-4 flex justify-between items-center">
          <div>Logo</div>
          {/* Close button for mobile */}
          <button className="sm:hidden text-white" onClick={toggleSidebar}>
            &times; {/* Close Icon */}
          </button>
        </div>
        <div>Sidebar Content</div>
      </div>

      {/* Header */}
      <div className="bg-gray-700 text-white p-4 rounded-xl flex justify-between items-center sm:hidden md:flex lg:flex xl:flex">
        <input type="text" className="border-2 border-blue-400 px-4 py-2 rounded-lg"/>
        
        <div className="flex space-x-4">
          <div className="border-2 border-blue-400 px-4 py-2 rounded-lg">prof</div>
          <div className="border-2 border-blue-400 px-4 py-2 rounded-lg">name</div>
          <div className="sm:hidden  ">
          <button
            className="border-2 border-blue-400 px-4 py-2 rounded-lg cursor-pointer"
            onClick={toggleSidebar}
          >
            &#x22EE; {/* 3 Dots Icon */}
          </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-gray-600 text-white p-4 rounded-xl">
        Main Content
      </div>
    </div>
  );
};

export default Doctor_Dashboard;
