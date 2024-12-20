import { useNavigate } from "react-router-dom"
import bgOne from "../assets/upscale1.jpeg";
import { useState } from 'react'
import axios from "axios";

const Doctor_PI = () => {
  const navigate = useNavigate();
  const [medicalLicenseNumber, setMedicalLicenseNumber] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [yearsOfExperience, setYearsOfExperience] = useState("");
  const [medicalSchool, setMedicalSchool] = useState("");
  const [hospitalOrClinic, setHospitalOrClinic] = useState("");
  // const [userFound, setUserFound] = useState("")
  const [error, setError] = useState("")

  function handleMLN(e) {
    setMedicalLicenseNumber(e.target.value);
  }
  function handleSpecialization(e) {
    setSpecialization(e.target.value);
  }
  function handleYOE(e) {
    setYearsOfExperience(e.target.value);
  }
  function handleMS(e) {
    setMedicalSchool(e.target.value);
  }
  function handleHOC(e) {
    setHospitalOrClinic(e.target.value);
  }

  function validatInput(medicalLicenseNumber, specialization, yearsOfExperience, medicalSchool, hospitalOrClinic) {
    if (medicalLicenseNumber == "" && specialization == "" && yearsOfExperience == "" && medicalSchool == "" && hospitalOrClinic == "") {
      setError("Fill all the fields before continuing")
      return false
    }
    else if (medicalLicenseNumber == "") {
      setError("Fill the  field before continuing")
      return false
    }
    else if (specialization == "") {
      setError("Fill the  field before continuing")
      return false
    }
    else if (yearsOfExperience == "") {
      setError("Fill the  field before continuing")
      return false
    }
    else if (medicalSchool == "") {
      setError("Fill the  field before continuing")
      return false
    }
    else if (hospitalOrClinic == "") {
      setError("Fill the  field before continuing")
      return false
    }
    const regex = /^\d{8,12}$/;
    if (!regex.test(medicalLicenseNumber)) {
      setError("Medical License Number should be 8-12 digits")
      return false
    }
    const Alphabetregex = /^[a-zA-Z]+$/;
    if (!Alphabetregex.test(specialization)) {
      setError("Must contain alphabets")
      return false;
    }
    if (!Alphabetregex.test(medicalSchool)) {
      setError("Must contain alphabets")
      return false;
    }
    if (!Alphabetregex.test(hospitalOrClinic)) {
      setError("Must contain alphabets")
      return false;
    }
    return true
  }
  const handleAllDataSubmit = async () => {
    if (!validatInput(medicalLicenseNumber, specialization, yearsOfExperience, medicalSchool, hospitalOrClinic)) {
      return
    }
    try {
      const response = await axios.post("/api/user/doctor/professionalInfo", {
        medicalLicenseNumber,
        specialization,
        yearsOfExperience,
        medicalSchool,
        hospitalOrClinic,
      });
      console.log(response.data);
      if (response.data.msg == "Success") {
        navigate("/user/doctor/validation");
      } else {
        setError("Something Went")
      }

    } catch (err) {
      console.log("Error occured while sending data to backend in PI - ", err);
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
        <h1 className='font-bold text-2xl text-[#034458] mt-10 font-raleway'>Personal Information</h1>
        <div className="font-bold text-xl text-red-600 mt-10 font-raleway">
          {error}
        </div>

        <div className="flex lg:border-[#35b5dc] lg:border-4 rounded-xl mt-5 mb-20 md:w-[80%]">
          <div className="hidden flex-row lg:block  lg:w-[70%] text-center font-raleway">
            <div className=" my-2 mx-4 px-4 py-2 font-raleway text-2xl font-think">MedLinea</div>

            <div className='text-3xl font-extrabold text-[#181f20] mb-10'>Welcom To MedLinea</div>
            <div className='text-xl font-light m-1 mb-32'>
              Empower your healthcare experience! Join us to manage appointments effortlessly and access personalized care. <span className='text-blue-700 '>Know More</span>
            </div>
            <div>Already a have an Account</div>
            <button className='border-2 border-[#287e98] font-light rounded-full px-4 py-2 mt-2 hover:shadow-lg hover:shadow-[#034458] duration-300 hover:-translate-y-1'>Sign In</button>
          </div>
          <div className="flex flex-col w-screen lg:bg-[#034458] opacity-90 lg:rounded- rounded-bl-3xl rounded-tl-3xl rounded-r-lg ">
            <label htmlFor="full name" className='font-bold text-[#03627f] pt-2 pb-1 pl-4 sm:ml-5 md:ml-9 text-sm opacity-100 lg:font-light  lg:text-xl  lg:text-white lg:ml-20 lg:mt-2 '>Medical Licence Number</label>
            <input className="lg:w-[70%] lg:self-center lg:m-0 ml-4 sm:ml-8 md:ml-12 rounded-lg py-1 px-1 lg:border-[#35b5dc] lg:border-b-2 lg:border-0 border-2 lg:outline-none lg:rounded-lg text-[#034458] lg:hover:shadow-[#0688b0] lg:hover:shadow-[0px_10px_10px_0px] lg:focus:hover:shadow-[#0688b0] lg:focus:hover:shadow-[0px_10px_10px_0px]  lg:focus-within:pl-5 lg:text-white shadow-lg font-semibold w-[90%] h-12 lg:bg-[#034458] focus-within:-translate-y-1 hover:-translate-y-1  duration-300 opacity-100 " type="text" placeholder='Enter License Number' value={medicalLicenseNumber} onChange={handleMLN} />
            <label htmlFor="Phone" className='font-bold text-[#03627f] pt-2 pb-1 pl-4 sm:ml-5 md:ml-9 text-sm opacity-100 lg:font-light  lg:text-xl  lg:text-white lg:ml-20 '>Specialization</label>
            <input className="lg:w-[70%] lg:self-center lg:m-0 ml-4 sm:ml-8 md:ml-12 rounded-lg py-1 px-1 lg:border-[#35b5dc] lg:border-b-2 lg:border-0 border-2 lg:outline-none lg:rounded-lg text-[#034458] lg:hover:shadow-[#0688b0] lg:hover:shadow-[0px_10px_10px_0px] lg:focus:hover:shadow-[#0688b0] lg:focus:hover:shadow-[0px_10px_10px_0px]  lg:focus-within:pl-5 lg:text-white shadow-lg font-semibold w-[90%] h-12 lg:bg-[#034458] focus-within:-translate-y-1 hover:-translate-y-1  duration-300 opacity-100 " type="text" placeholder='Enter Specialization in CSV' value={specialization} onChange={handleSpecialization} />
            <label htmlFor="dob" className='font-bold text-[#03627f] pt-2 pb-1 pl-4 sm:ml-5 md:ml-9 text-sm opacity-100 lg:font-light  lg:text-xl  lg:text-white lg:ml-20 '>Years Of Expriance</label>
            <input className="lg:w-[70%] lg:self-center lg:m-0 ml-4 sm:ml-8 md:ml-12 rounded-lg py-1 px-1 lg:border-[#35b5dc] lg:border-b-2 lg:border-0 border-2 lg:outline-none lg:rounded-lg text-[#034458] lg:hover:shadow-[#0688b0] lg:hover:shadow-[0px_10px_10px_0px] lg:focus:hover:shadow-[#0688b0] lg:focus:hover:shadow-[0px_10px_10px_0px]  lg:focus-within:pl-5 lg:text-white shadow-lg font-semibold w-[90%] h-12 lg:bg-[#034458] focus-within:-translate-y-1 hover:-translate-y-1  duration-300 opacity-100 " type="number" placeholder='Enter in Numbers' value={yearsOfExperience} onChange={handleYOE} />
            <label htmlFor="dob" className='font-bold text-[#03627f] pt-2 pb-1 pl-4 sm:ml-5 md:ml-9 text-sm opacity-100 lg:font-light  lg:text-xl  lg:text-white lg:ml-20 '>Medical Schoole/Institution</label>
            <input className="lg:w-[70%] lg:self-center lg:m-0 ml-4 sm:ml-8 md:ml-12 rounded-lg py-1 px-1 lg:border-[#35b5dc] lg:border-b-2 lg:border-0 border-2 lg:outline-none lg:rounded-lg text-[#034458] lg:hover:shadow-[#0688b0] lg:hover:shadow-[0px_10px_10px_0px] lg:focus:hover:shadow-[#0688b0] lg:focus:hover:shadow-[0px_10px_10px_0px]  lg:focus-within:pl-5 lg:text-white shadow-lg font-semibold w-[90%] h-12 lg:bg-[#034458] focus-within:-translate-y-1 hover:-translate-y-1  duration-300 opacity-100 " type="text" placeholder='Full Name of Institute' value={medicalSchool} onChange={handleMS} />
            <label htmlFor="dob" className='font-bold text-[#03627f] pt-2 pb-1 pl-4 sm:ml-5 md:ml-9 text-sm opacity-100 lg:font-light  lg:text-xl  lg:text-white lg:ml-20 '>Hospital or Clinic Name</label>
            <input className="lg:w-[70%] lg:self-center lg:m-0 ml-4 sm:ml-8 md:ml-12 rounded-lg py-1 px-1 lg:border-[#35b5dc] lg:border-b-2 lg:border-0 border-2 lg:outline-none lg:rounded-lg text-[#034458] lg:hover:shadow-[#0688b0] lg:hover:shadow-[0px_10px_10px_0px] lg:focus:hover:shadow-[#0688b0] lg:focus:hover:shadow-[0px_10px_10px_0px]  lg:focus-within:pl-5 lg:text-white shadow-lg font-semibold w-[90%] h-12 lg:bg-[#034458] focus-within:-translate-y-1 hover:-translate-y-1  duration-300 opacity-100 " type="text" placeholder='Full Nme of Hospital/Clinic' value={hospitalOrClinic} onChange={handleHOC} />

            <button className="font-light text-lg text-white py-2 mt-5 rounded-lg bg-black w-[50%] self-center opacity-100 hover:shadow-lg hover:shadow-[#0688b0] hover:-translate-y-1 duration-500 mb-5 " onClick={handleAllDataSubmit}>Submit</button>
            {/* <Link to="/user/doctor/validation"><button className="font-light text-lg text-white py-2 mt-5 rounded-lg bg-black w-[50%] self-center opacity-100 hover:shadow-md hover:shadow-[#0688b0] duration-500" >Submit</button></Link> */}
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

export default Doctor_PI
