// import React from 'react'
import { useEffect } from 'react'
import Header from './HeaderForDashboardComponent'
import axios from 'axios'
const ManageAppointment = () => {

    useEffect(()=>{
        const handleGetAllApointment = async() =>{
            try {
                const response = await axios.get("/api/user/patient/all-patient-appointment")
            } catch (error) {
                console.log("Error while getting all appointment = ",error);
            }
        }
        handleGetAllApointment();
    },[])
  return (
    <div>
      <Header />
      <div>

      <div className='grid grid-cols-4'>
        {/* {appointmentCardData.map((item) => ( */}
          <div  className='mx-5 my-5 flex flex-col text-center border-2 border-blue-900 py-2  rounded-xl h-fit p'>
            <label className='' htmlFor="">item.reasonOfAppointment</label>
            <label htmlFor="review">item.dateOfAppointment</label>
            <label className='' htmlFor="description">item.timeOfAppointment</label>
            <label className='' htmlFor="description">item.locationOfAppointment</label>
            {/* <button className={`border-2 border-black  rounded-full text-white py-1 px-2 m-1 ${item.appointmentStatus == "Booked" ? "bg-red-600" : "bg-slate-900"} `} disabled={item.appointmentStatus != "Booked"} onClick={()=>{handlePatientInfoToDoctor(item._id), setVeiwAppointmentDetails(true)}} >{item.appointmentStatus}</button>
            <button className={`border-2 border-black bg-slate-900 rounded-full text-white py-1 px-2 m-1 ${item.appointmentStatus == "Booked" ? "opacity-50" : ""} `} disabled={item.appointmentStatus === "Booked"} onClick={() => openModal(item)}>Edit appointment</button> */}
          </div>
          
          {/* ))} */}
      </div>
      </div>
    </div>
  )
}

export default ManageAppointment
