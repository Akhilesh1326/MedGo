import {useState} from 'react'
import {io} from "socket.io-client";
import { v4 as uuid } from 'uuid';
import {Link} from "react-router-dom";

import HeaderForDashboardComponent from "./HeaderForDashboardComponent"

const ManageAppoinment = () => {
  const [sendMsg, setSendMsg] = useState("");
  const [appointmentPop, setAppoinmentPop] = useState(false);

  const handleSendMessage = (e)=>{
    setSendMsg(e.target.value);
  }

  const handleAppointmentPop = () =>{
    console.log("click")
    setAppoinmentPop(!appointmentPop);
    console.log(appointmentPop)
  }

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
  return (
    <div>
      <HeaderForDashboardComponent/>
      <button className='border-2 border-blue-700 rounded-xl' onClick={handleAppointmentPop}>
  {appointmentPop ? "Exit Edit" : "Make Appoinment"}</button>

<div className={`z-10 absolute bg-blue-900 border-4 border-blue-800 rounded-xl w-[60%] ${appointmentPop ? "flex flex-col" : "hidden"} transition-all duration-300`}>
  <input 
    type="text" 
    placeholder='Title' 
    value={sendMsg} 
    onChange={handleSendMessage}
  />
  <input 
    type="text" 
    placeholder='Description' 
  />
  <input 
    type="date" 
    placeholder='Enter Date' 
  />
  <input 
    type="time" 
    placeholder='Enter Time'
  />
  <input 
    type="text" 
    placeholder='Other Info' 
  />
  <button 
    onClick={sendMessage}
  >
    Send Message
  </button>
</div>
<div className='grid grid-cols-2'>

<div className='grid grid-cols-3'>
<div className='w-fit flex flex-col text-center border-2 border-blue-900 py-2 px-4 rounded-xl h-fit'>
  <label className='' htmlFor="">title</label>
  <label htmlFor="review">timing</label>
  <label className='' htmlFor="description">creation date</label>
  <label className='' htmlFor="description"></label>
  <button className='border-2 border-black bg-slate-900 rounded-full text-white py-1 px-2'>Booking Status</button>
  <button className='border-2 border-black bg-slate-900 rounded-full text-white py-1 px-2'>Edit appoinment</button>
</div>

<div className='w-fit flex flex-col text-center border-2 border-blue-900 py-2 px-4 rounded-xl'>
  <label className='' htmlFor="">title</label>
  <label htmlFor="review">timing</label>
  <label className='' htmlFor="description">creation date</label>
  <label className='' htmlFor="description"></label>
  <button className='border-2 border-black bg-slate-900 rounded-full text-white py-1 px-2'>Booking Status</button>
  <button className='border-2 border-black bg-slate-900 rounded-full text-white py-1 px-2'>Edit appoinment</button>
</div>
<div className='w-fit flex flex-col text-center border-2 border-blue-900 py-2 px-4 rounded-xl'>
  <label className='' htmlFor="">title</label>
  <label htmlFor="review">timing</label>
  <label className='' htmlFor="description">creation date</label>
  <label className='' htmlFor="description"></label>
  <button className='border-2 border-black bg-slate-900 rounded-full text-white py-1 px-2'>Booking Status</button>
  <button className='border-2 border-black bg-slate-900 rounded-full text-white py-1 px-2'>Edit appoinment</button>
</div>
<div className='w-fit flex flex-col text-center border-2 border-blue-900 py-2 px-4 rounded-xl'>
  <label className='' htmlFor="">title</label>
  <label htmlFor="review">timing</label>
  <label className='' htmlFor="description">creation date</label>
  <label className='' htmlFor="description"></label>
  <button className='border-2 border-black bg-slate-900 rounded-full text-white py-1 px-2'>Booking Status</button>
  <button className='border-2 border-black bg-slate-900 rounded-full text-white py-1 px-2'>Edit appoinment</button>
</div>
</div>
<div className='grid grid-cols-3'>
<div className='w-fit flex flex-col text-center border-2 border-blue-900 py-2 px-4 rounded-xl h-fit'>
  <label className='' htmlFor="">title</label>
  <label htmlFor="review">timing</label>
  <label className='' htmlFor="description">creation date</label>
  <label className='' htmlFor="description"></label>
  <button className='border-2 border-black bg-slate-900 rounded-full text-white py-1 px-2'>Booking Status</button>
  <button className='border-2 border-black bg-slate-900 rounded-full text-white py-1 px-2'>Edit appoinment</button>
</div>
<div className='w-fit flex flex-col text-center border-2 border-blue-900 py-2 px-4 rounded-xl h-fit'>
  <label className='' htmlFor="">title</label>
  <label htmlFor="review">timing</label>
  <label className='' htmlFor="description">creation date</label>
  <label className='' htmlFor="description"></label>
  <button className='border-2 border-black bg-slate-900 rounded-full text-white py-1 px-2'>Booking Status</button>
  <button className='border-2 border-black bg-slate-900 rounded-full text-white py-1 px-2'>Edit appoinment</button>
</div>
<div className='w-fit flex flex-col text-center border-2 border-blue-900 py-2 px-4 rounded-xl h-fit'>
  <label className='' htmlFor="">title</label>
  <label htmlFor="review">timing</label>
  <label className='' htmlFor="description">creation date</label>
  <label className='' htmlFor="description"></label>
  <button className='border-2 border-black bg-slate-900 rounded-full text-white py-1 px-2'>Booking Status</button>
  <button className='border-2 border-black bg-slate-900 rounded-full text-white py-1 px-2'>Edit appoinment</button>
</div>
<div className='w-fit flex flex-col text-center border-2 border-blue-900 py-2 px-4 rounded-xl h-fit'>
  <label className='' htmlFor="">title</label>
  <label htmlFor="review">timing</label>
  <label className='' htmlFor="description">creation date</label>
  <label className='' htmlFor="description"></label>
  <button className='border-2 border-black bg-slate-900 rounded-full text-white py-1 px-2'>Booking Status</button>
  <button className='border-2 border-black bg-slate-900 rounded-full text-white py-1 px-2'>Edit appoinment</button>
</div>
</div>
</div>
    </div>
  )
}

export default ManageAppoinment
