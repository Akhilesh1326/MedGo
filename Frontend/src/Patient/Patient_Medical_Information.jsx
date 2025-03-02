// / import React from 'react'
import { useNavigate } from "react-router-dom"
import bgOne from "../assets/upscale-2.jpeg"
import axios from "axios"
import { useState } from "react"

const Patient_Medcial_Information = () => {
  const navigate = useNavigate();
  const [currentMedications, setCurrentMedications] = useState("");
  const [knowAllergies, setKnowAllergies] = useState("");
  const [medicalHistory, setMedicalHistory] = useState("");
  const [pastSurgeries, setPastSurgeries] = useState("");
  const [familyMedicalHistory, setFamilyMedicalHistory] = useState("");
  const [error, setError] = useState("")
  // const [success, setSuccess] = useState("")

  function validatInput(currentMedications, knowAllergies, medicalHistory, pastSurgeries, familyMedicalHistory) {

    if (currentMedications == "" && knowAllergies == "" && medicalHistory == "" && pastSurgeries == "" && familyMedicalHistory == "") {
      setError("Fill all the fields before continuing")
      return false
    }
    else if (currentMedications=="") {
      setError("Fill the current medication field before continuing");
      return false
    }
    else if (knowAllergies=="") {
      setError("Fill the know allergies field before continuing");
      return false
    }
    else if (medicalHistory=="") {
      setError("Fill the medical history field before continuing");
      return false
    }
    else if (pastSurgeries=="") {
      setError("Fill the past surgeries field before continuing");
      return false
    }
    else if (familyMedicalHistory=="") {
      setError("Fill the family medical history field before continuing");
      return false
    }



    return true
  }

  const handleMecialInformationFormSubmit = async () => {
    if(!validatInput(currentMedications, knowAllergies, medicalHistory, pastSurgeries, familyMedicalHistory)){
      return
    }
    
    try {
      const resp = await axios.post("/api/user/patient/medicalInfo", {
        currentMedications,
        knowAllergies,
        medicalHistory,
        pastSurgeries,
        familyMedicalHistory
      })
      console.log("Resp = ", resp);
      if (resp.data.msg == "Success") {
        console.log("Navigating...")
        navigate("/user/patient/dashboard")
      } else {
        setError("Error Occured Please try again..")
      }
    } catch (error) {
      console.log("Error here = ", error);
    }
  }

  return (
    <div>
      <div className="flex flex-col justify-center items-center z-0 h-screen"
        style={{
          backgroundImage: `url(${bgOne})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        {/* <h1 className='font-bold text-2xl text-[#034458]D7EAFB mt-10'>User Validation</h1> */}
        <h1 className='font-bold text-2xl text-[#327dbe] mt-10'>Medical Information</h1>
        <h1 className='font-bold text-xl text-red-600 mt-10'>{error}</h1>

        <div className="flex lg:border-[#4eacff] lg:border-4 rounded-xl -mt-5x mb-20 md:w-[80%]">
          <div className="hidden flex-row lg:block  lg:w-[70%] text-center font-raleway">
            <div className=" my-2 mx-4 px-4 py-2 font-raleway text-2xl font-think">MedLinea</div>

            <div className='text-3xl font-extrabold text-[#38a2ff] mb-10'>Welcom To MedLinea</div>
            <div className='text-xl font-light m-1 mb-20 text-[#1d5789]'>
              Empower your healthcare experience! Join us to manage appointments effortlessly and access personalized care. <span className='text-[#319afc] '>Know More</span>
            </div>
            <div className="text-[#1d5789]">Already a have an Account</div>
            <button className='border-2 border-[#74b2e9] font-light rounded-full px-4 py-2 mt-2 hover:shadow-lg hover:shadow-[#0d4576] duration-300 hover:-translate-y-1'>Sign In</button>
          </div>
          <div className="flex flex-col w-screen lg:bg-[#0d4576] opacity-90 lg:rounded- rounded-bl-3xl rounded-tl-3xl rounded-r-lg ">
            <label htmlFor="full name" className='font-bold text-[#03627f] pt-3 pb-1 pl-4 sm:ml-5 md:ml-9 text-sm opacity-100 lg:font-light  lg:text-xl  lg:text-white lg:ml-20 lg:mt-8 '>Current Medications</label>
            <input className="lg:w-[70%] lg:self-center lg:m-0 ml-4 sm:ml-8 md:ml-12 rounded-lg py-1 px-1 lg:border-[#35b5dc] lg:border-b-2 lg:border-0 border-2 lg:outline-none lg:rounded-lg text-[#034458] lg:hover:shadow-[#38a2ff] lg:hover:shadow-[0px_10px_10px_0px] lg:focus:hover:shadow-[#0688b0] lg:focus:hover:shadow-[0px_10px_10px_0px]  lg:focus-within:pl-5 lg:text-white shadow-lg font-semibold w-[90%] h-12 lg:bg-[#0d4576] focus-within:-translate-y-1 hover:-translate-y-1  duration-300 opacity-100 " type="text" placeholder='Medication Names' value={currentMedications} onChange={(e) => setCurrentMedications(e.target.value)} />
            <label htmlFor="Phone" className='font-bold text-[#03627f] pt-3 pb-1 pl-4 sm:ml-5 md:ml-9 text-sm opacity-100 lg:font-light  lg:text-xl  lg:text-white lg:ml-20 '>Known Allergies</label>
            <input className="lg:w-[70%] lg:self-center lg:m-0 ml-4 sm:ml-8 md:ml-12 rounded-lg py-1 px-1 lg:border-[#35b5dc] lg:border-b-2 lg:border-0 border-2 lg:outline-none lg:rounded-lg text-[#034458] lg:hover:shadow-[#38a2ff] lg:hover:shadow-[0px_10px_10px_0px] lg:focus:hover:shadow-[#0688b0] lg:focus:hover:shadow-[0px_10px_10px_0px]  lg:focus-within:pl-5 lg:text-white shadow-lg font-semibold w-[90%] h-12 lg:bg-[#0d4576] focus-within:-translate-y-1 hover:-translate-y-1  duration-300 opacity-100 " type="text" placeholder='Name of Allergies' value={knowAllergies} onChange={(e) => setKnowAllergies(e.target.value)} />
            <label htmlFor="Phone" className='font-bold text-[#03627f] pt-3 pb-1 pl-4 sm:ml-5 md:ml-9 text-sm opacity-100 lg:font-light  lg:text-xl  lg:text-white lg:ml-20 '>Medical History</label>
            <input className="lg:w-[70%] lg:self-center lg:m-0 ml-4 sm:ml-8 md:ml-12 rounded-lg py-1 px-1 lg:border-[#35b5dc] lg:border-b-2 lg:border-0 border-2 lg:outline-none lg:rounded-lg text-[#034458] lg:hover:shadow-[#38a2ff] lg:hover:shadow-[0px_10px_10px_0px] lg:focus:hover:shadow-[#0688b0] lg:focus:hover:shadow-[0px_10px_10px_0px]  lg:focus-within:pl-5 lg:text-white shadow-lg font-semibold w-[90%] h-12 lg:bg-[#0d4576] focus-within:-translate-y-1 hover:-translate-y-1  duration-300 opacity-100 " type="text" placeholder='Any Kind' value={medicalHistory} onChange={(e) => setMedicalHistory(e.target.value)} />
            <label htmlFor="dob" className='font-bold text-[#03627f] pt-3 pb-1 pl-4 sm:ml-5 md:ml-9 text-sm opacity-100 lg:font-light  lg:text-xl  lg:text-white lg:ml-20 '>Past Surgeries</label>
            <input className="lg:w-[70%] lg:self-center lg:m-0 ml-4 sm:ml-8 md:ml-12 rounded-lg py-1 px-1 lg:border-[#35b5dc] lg:border-b-2 lg:border-0 border-2 lg:outline-none lg:rounded-lg text-[#034458] lg:hover:shadow-[#38a2ff] lg:hover:shadow-[0px_10px_10px_0px] lg:focus:hover:shadow-[#0688b0] lg:focus:hover:shadow-[0px_10px_10px_0px]  lg:focus-within:pl-5 lg:text-white shadow-lg font-semibold w-[90%] h-12 lg:bg-[#0d4576] focus-within:-translate-y-1 hover:-translate-y-1  duration-300 opacity-100 " type="text" placeholder='Surgeries Names' value={pastSurgeries} onChange={(e) => setPastSurgeries(e.target.value)} />
            <label htmlFor="dob" className='font-bold text-[#03627f] pt-3 pb-1 pl-4 sm:ml-5 md:ml-9 text-sm opacity-100 lg:font-light  lg:text-xl  lg:text-white lg:ml-20 '>Family Medical History</label>
            <input className="lg:w-[70%] lg:self-center lg:m-0 ml-4 sm:ml-8 md:ml-12 rounded-lg py-1 px-1 lg:border-[#35b5dc] lg:border-b-2 lg:border-0 border-2 lg:outline-none lg:rounded-lg text-[#034458] lg:hover:shadow-[#38a2ff] lg:hover:shadow-[0px_10px_10px_0px] lg:focus:hover:shadow-[#0688b0] lg:focus:hover:shadow-[0px_10px_10px_0px]  lg:focus-within:pl-5 lg:text-white shadow-lg font-semibold w-[90%] h-12 lg:bg-[#0d4576] focus-within:-translate-y-1 hover:-translate-y-1  duration-300 opacity-100 " type="text" placeholder='Gentics or Other' value={familyMedicalHistory} onChange={(e) => setFamilyMedicalHistory(e.target.value)} />

            <button className="font-light text-lg text-white py-2 mt-7 rounded-lg bg-black w-[50%] self-center opacity-100 hover:shadow-lg hover:shadow-[#38a2ff] hover:-translate-y-1 duration-500 mb-8 " onClick={handleMecialInformationFormSubmit}>Submit</button>
            {/* <Link to="/user/patient/dashboard"><button className="font-light text-lg text-white py-2 mt-5 rounded-lg bg-black w-[50%] self-center opacity-100 hover:shadow-md hover:shadow-[#0688b0] duration-500" >Submit</button></Link> */}
            <div className='lg:hidden flex justify-center mb-2'>
              <label htmlFor="login question" className='self-center text-sm mt-4 font-semibold text-[#034458]'>Already have an account?</label>
              <label htmlFor="signup" className='self-center text-sm mt-4 font-bold text-black ml-2'>Sign In</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Patient_Medcial_Information