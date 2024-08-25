import {useState} from 'react'
import {io} from "socket.io-client";
import { v4 as uuid } from 'uuid';

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
      <header className='w-full border-2 border-black flex justify-between h-16'>
        <span>Logo</span>
        <div>
        <span className='ml-10'>button1</span>
        <span className='ml-10'>button2</span>
        </div>
      </header>
      <button className='border-2 border-blue-700 rounded-xl' onClick={handleAppointmentPop}>
  {appointmentPop ? "Make Appointment" : "Exit Edit"}</button>

<div className={` border-4 border-blue-800 rounded-xl w-[60%] ${appointmentPop ? "hidden" : "flex flex-col"} transition-all duration-300`}>
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

<div className='w-fit flex flex-col text-center border-2 border-blue-900 py-2 px-4 rounded-xl'>
  {/* <img src='' alt='doct' className='bg-slate-700 rounded-full py-1 px-2'> */}
  <img src="no" alt="img" className='bg-slate-700 rounded-full   w-16 h-16 self-center'/>
  <label className='' htmlFor="Doctor name">name of the doctor</label>
  <label htmlFor="review">timing</label>
  <label className='' htmlFor="description">date</label>
  <label className='' htmlFor="description">review</label>
  <button className='border-2 border-black bg-slate-900 rounded-full text-white py-1 px-2'>book an appoinment</button>
</div>

    </div>
  )
}

export default ManageAppoinment
