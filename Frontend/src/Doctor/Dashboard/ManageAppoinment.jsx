import {useState} from 'react'
import {io} from "socket.io-client";
import { v4 as uuid } from 'uuid';

const ManageAppoinment = () => {
  const [sendMsg, setSendMsg] = useState("");

  const handleSendMessage = (e)=>{
    setSendMsg(e.target.value);
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
      <h1>Create Appoinment</h1>
      <input type="text" placeholder='Send Name here' value={sendMsg} onChange={handleSendMessage}/>
      <button onClick={sendMessage}>Send Message</button>
    </div>
  )
}

export default ManageAppoinment
