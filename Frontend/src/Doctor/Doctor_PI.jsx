import { Link } from "react-router-dom"

import {useState} from 'react'
import axios from "axios";
Link

const Doctor_PI = () => {
  const [medicalLicenseNumber, setMedicalLicenseNumber] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [yearsOfExperience, setYearsOfExperience] = useState("");
  const [medicalSchool, setMedicalSchool] = useState("");
  const [hospitalOrClinic, setHospitalOrClinic] = useState("");

  function handleMLN(e){
    setMedicalLicenseNumber(e.target.value);
  }
  function handleSpecialization(e){
    setSpecialization(e.target.value);
  }
  function handleYOE(e){
    setYearsOfExperience(e.target.value);
  }
  function handleMS(e){
    setMedicalSchool(e.target.value);
  }
  function handleHOC(e){
    setHospitalOrClinic(e.target.value);
  }

  const handleAllDataSubmit = async()=>{
    try{
      const response = await axios.post("/api/user/doctor/professionalInfo",{
        medicalLicenseNumber, 
        specialization, 
        yearsOfExperience, 
        medicalSchool, 
        hospitalOrClinic,
      });
      console.log(response.data);
    }catch(err){
      console.log("Error occured while sending data to backend in PI - ",err);
    }
  }
  return (
      <div>
      <div className="flex flex-col justify-center items-center">
      <h1>Doctor{"'"}s Sign in page - page3</h1>
        <div className="flex border-black border-2 mt-20 ">
          <div className="border-black border-2">
            <div className="border-blue-400 mx-4 my-4">
              logo
            </div>
          </div>
          <div className="border-black border-2 flex flex-col">
            <label htmlFor="first name">Medical Licence Number</label>
            <input className="border-emerald-500 border-2" type="text" value={medicalLicenseNumber} onChange={handleMLN}/>
            <label htmlFor="last name">Specialization</label>
            <input className="border-emerald-500 border-2" type="text" value={specialization} onChange={handleSpecialization}/>
            <label htmlFor="email">Years of Experience</label>
            <input className="border-emerald-500 border-2" type="text" value={yearsOfExperience} onChange={handleYOE}/>
            <label htmlFor="gender">Medical School/Institution</label>
            <input className="border-emerald-500 border-2" type="text" value={medicalSchool} onChange={handleMS}/>
            <label htmlFor="gender">Hospital or Clinic</label>
            <input className="border-emerald-500 border-2" type="text" value={hospitalOrClinic} onChange={handleHOC}/>
            
            <Link to="/user/doctor/validation"> <button className="border-emerald-300 border-2 content-center">Next</button></Link>
            <button className="border-emerald-300 border-2 content-center" onClick={handleAllDataSubmit}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Doctor_PI
