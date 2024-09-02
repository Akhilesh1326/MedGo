import { useState, useEffect } from 'react'
import { io } from "socket.io-client";

import HeaderForDashboardComponent from "./HeaderForDashboardComponent"
import axios from 'axios';

const ManageAppoinment = () => {
  const [appointmentCardData, setAppointmentCardData] = useState([]);
  const [appointmentPop, setAppoinmentPop] = useState(false);

  const [dateOfAppointment, setDateOfAppointment] = useState("");
  const [timeOfAppointment, setTimeOfAppointment] = useState("");
  const [typeOfAppointment, setTypeOfAppointment] = useState("");
  const [reasonOfAppointment, setReasonOfAppointment] = useState("");
  const [locationOfAppointment, setLocationOfAppointment] = useState("");
  const [durationOfAppointment, setDurationOfAppointment] = useState("");

  const handleAppointmentSubmit = async () => {
    const patientType = "onlineEntry";
    const appointmentStatus = "Unbooked"
    try {
      const resp = await axios.post("/api/user/docotor-create-online-appointment", {
        patientType,
        dateOfAppointment,
        timeOfAppointment,
        typeOfAppointment,
        reasonOfAppointment,
        locationOfAppointment,
        durationOfAppointment,
        appointmentStatus
      })
      
      const msg = `${typeOfAppointment} created`
      const socket = io("http://localhost:8000");
  
      socket.emit('client-message', msg);
      console.log("Message Sent");
      console.log(resp);
      setDateOfAppointment("")
      setTimeOfAppointment("")
      setTypeOfAppointment("")
      setReasonOfAppointment("")
      setLocationOfAppointment("")
      setDurationOfAppointment("")

      

    } catch (err) {
      console.log("Error occurd ", err);
    }
  }


  const handleSendMsg = () =>{
    const msg = `${typeOfAppointment} created`
    const socket = io("http://localhost:8000");

    socket.emit('client-message', msg);
    console.log("Message Sent");
  }

  useEffect(() => {
    const handleAppointmentData = async () => {

      try {

        const resp = await axios.get("/api/user/appointment-show/")
        console.log("resp = ", resp.data)
        console.log("resp = ", resp)
        console.log("resp = ", resp.data.data)
        setAppointmentCardData(resp.data.data)
      } catch (err) {
        console.log("Error Occured = ", err);
      }
    }
    handleAppointmentData();
  }, [appointmentPop],[])

  const handleAppointmentPop = () => {
    console.log("click")
    setAppoinmentPop(!appointmentPop);
    console.log(appointmentPop)
  }


  return (
    <div>
      <HeaderForDashboardComponent />
      <button className='border-2 border-blue-700 rounded-xl' onClick={handleAppointmentPop}>
        {appointmentPop ? "Exit Edit" : "Make Appoinment"}</button>

      <div className={`z-10 absolute  bg-blue-900 border-4 border-blue-800 rounded-xl w-fit ${appointmentPop ? "flex flex-col" : "hidden"} transition-all duration-300`}>
        <div className='text-lg font-light my-2 mx-2 text-slate-100 '>Appointment Details</div>
        <div className='text-lg font-light my-2 mx-2 text-slate-100 '>Date of Appointment</div>
        <input className='w-[15rem] px-2 py-1 mx-2 my-2 rounded-lg' type="date" placeholder='Enter Date' value={dateOfAppointment} onChange={(e) => setDateOfAppointment(e.target.value)} />
        <div className='text-lg font-light my-2 mx-2 text-slate-100 '>Appointment Time</div>
        <input className='w-[15rem] px-2 py-1 mx-2 my-2 rounded-lg' type="time" placeholder='Enter Time' value={timeOfAppointment} onChange={(e) => setTimeOfAppointment(e.target.value)} />
        <div className='text-lg font-light my-2 mx-2 text-slate-100 '>Type of Appointment</div>
        <input className='w-[15rem] px-2 py-1 mx-2 my-2 rounded-lg' type="text" placeholder='Appointment Type' value={typeOfAppointment} onChange={(e) => setTypeOfAppointment(e.target.value)} />
        <div className='text-lg font-light my-2 mx-2 text-slate-100 '>Reason for Appointment</div>
        <input className='w-[15rem] px-2 py-1 mx-2 my-2 rounded-lg' type="text" placeholder='Description' value={reasonOfAppointment} onChange={(e) => setReasonOfAppointment(e.target.value)} />
        <div className='text-lg font-light my-2 mx-2 text-slate-100 '>Location Of Appointment</div>
        <input className='w-[15rem] px-2 py-1 mx-2 my-2 rounded-lg' type="text" placeholder='Specify Location of Appointment' value={locationOfAppointment} onChange={(e) => setLocationOfAppointment(e.target.value)} />
        <div className='text-lg font-light my-2 mx-2 text-slate-100 '>Duration</div>
        <input className='w-[15rem] px-2 py-1 mx-2 my-2 rounded-lg' type="text" placeholder='What is duration of appointment' value={durationOfAppointment} onChange={(e) => setDurationOfAppointment(e.target.value)} />
        <button className='w-fit px-4 py-2 my-2 font-light text-lg text-slate-100 bg-slate-900  self-center rounded-lg' onClick={handleAppointmentSubmit}>Create Appointment</button>
      </div>
      <div className='grid grid-cols-2'>

        <div className='grid grid-cols-3'>
          {appointmentCardData.map((item)=>(
            <div key={item._id} className='w-fit flex flex-col text-center border-2 border-blue-900 py-2 px-4 rounded-xl h-fit'>
            <label className='' htmlFor="">{item.reasonOfAppointment}</label>
            <label htmlFor="review">{item.dateOfAppointment}</label>
            <label className='' htmlFor="description">{item.timeOfAppointment}</label>
            <label className='' htmlFor="description">{item.locationOfAppointment}</label>
            <button className='border-2 border-black bg-slate-900 rounded-full text-white py-1 px-2'>Booking Status</button>
            <button className='border-2 border-black bg-slate-900 rounded-full text-white py-1 px-2'>Edit appoinment</button>
          </div>
          ))

          }
          

          <div className='w-fit flex flex-col text-center border-2 border-blue-900 py-2 px-4 rounded-xl'>
            <label className='' htmlFor="">title</label>
            <label htmlFor="review">timing</label>
            <label className='' htmlFor="description">creation date</label>
            <label className='' htmlFor="description"></label>
            <button className='border-2 border-black bg-slate-900 rounded-full text-white py-1 px-2' onClick={handleSendMsg}>send msg</button>
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
