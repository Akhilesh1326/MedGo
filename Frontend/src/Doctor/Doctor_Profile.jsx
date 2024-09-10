// import React from 'react'
import axios from "axios"
import { useEffect } from "react"


const Doctor_Profile = () => {
  

  useEffect(()=>{
    async function handleDoctorAllProfileData() {
      try {
        const resp = await axios.get("/api/user/doctor/all-profile-data")
        console.log(resp);
      } catch (error) {
        console.log("Error while getting doctor profile data ",error)
      }
    }
    handleDoctorAllProfileData();
  },[])
  return (
    <div>
      
    </div>
  )
}

export default Doctor_Profile
