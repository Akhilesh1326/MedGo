import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import bgOne from "../assets/upscale1.jpeg";

const Doctor_SignIn = () => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");

  function handleFullNameInput(e) {
    setFullName(e.target.value);
  }
  function handlePhoneInput(e) {
    setPhone(e.target.value);
  }
  function handleDateOfBirthInput(e) {
    setDateOfBirth(e.target.value);
  }
  function handleGenderInput(e) {
    setGender(e.target.value);
  }

  async function handleAllDataSubmit() {
    try {
      const response = await axios.post("/api/user/doctor/basicInfo", {
        fullName,
        phone,
        dateOfBirth,
        gender,
      });
      console.log(response.data);
    } catch (error) {
      console.error("Error submitting data:", error);
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
        <h1 className='font-bold text-2xl text-[#034458] mt-10'>Sign In</h1>

        <div className="flex lg:border-[#35b5dc] lg:border-4 rounded-xl mt-5 mb-20 md:w-[80%]">
          <div className="hidden lg:block  lg:w-[70%] text-center">
            <div className="">
              logo
            </div>
          </div>
          <div className="flex flex-col w-screen lg:bg-[#034458] opacity-90 lg:rounded- rounded-bl-3xl rounded-tl-3xl rounded-r-lg ">
            <label htmlFor="full name" className='font-bold text-[#03627f] pt-3 pb-1 pl-4 sm:ml-5 md:ml-9 text-sm opacity-100 lg:font-light  lg:text-xl  lg:text-white lg:ml-20 lg:mt-5 '>Full Name</label>
            <input className="lg:w-[70%] lg:self-center lg:m-0 ml-4 sm:ml-8 md:ml-12 rounded-lg py-1 px-1 lg:border-[#35b5dc] lg:border-b-2 lg:border-0 border-2 lg:outline-none lg:rounded-lg text-[#034458] lg:hover:shadow-[#0688b0] lg:hover:shadow-[0px_10px_10px_0px] lg:focus:hover:shadow-[#0688b0] lg:focus:hover:shadow-[0px_10px_10px_0px]  lg:focus-within:pl-5 lg:text-white shadow-lg font-semibold w-[90%] h-12 lg:bg-[#034458] focus-within:-translate-y-1 hover:-translate-y-1  duration-300 opacity-100 " type="text" placeholder='First and Last name' value={fullName} onChange={handleFullNameInput} />
            <label htmlFor="Phone" className='font-bold text-[#03627f] pt-3 pb-1 pl-4 sm:ml-5 md:ml-9 text-sm opacity-100 lg:font-light  lg:text-xl  lg:text-white lg:ml-20 '>Phone</label>
            <input className="lg:w-[70%] lg:self-center lg:m-0 ml-4 sm:ml-8 md:ml-12 rounded-lg py-1 px-1 lg:border-[#35b5dc] lg:border-b-2 lg:border-0 border-2 lg:outline-none lg:rounded-lg text-[#034458] lg:hover:shadow-[#0688b0] lg:hover:shadow-[0px_10px_10px_0px] lg:focus:hover:shadow-[#0688b0] lg:focus:hover:shadow-[0px_10px_10px_0px]  lg:focus-within:pl-5 lg:text-white shadow-lg font-semibold w-[90%] h-12 lg:bg-[#034458] focus-within:-translate-y-1 hover:-translate-y-1  duration-300 opacity-100 " type="text" placeholder='Contact Number' value={phone} onChange={handlePhoneInput} />
            <label htmlFor="dob" className='font-bold text-[#03627f] pt-3 pb-1 pl-4 sm:ml-5 md:ml-9 text-sm opacity-100 lg:font-light  lg:text-xl  lg:text-white lg:ml-20 '>DOB</label>
            <input className="lg:w-[70%] lg:self-center lg:m-0 ml-4 sm:ml-8 md:ml-12 rounded-lg py-1 px-1 lg:border-[#35b5dc] lg:border-b-2 lg:border-0 border-2 lg:outline-none lg:rounded-lg text-[#034458] lg:hover:shadow-[#0688b0] lg:hover:shadow-[0px_10px_10px_0px] lg:focus:hover:shadow-[#0688b0] lg:focus:hover:shadow-[0px_10px_10px_0px]  lg:focus-within:pl-5 lg:text-white shadow-lg font-semibold w-[90%] h-12 lg:bg-[#034458] focus-within:-translate-y-1 hover:-translate-y-1  duration-300 opacity-100 " type="text" placeholder='DD-MM-YYYY' value={dateOfBirth} onChange={handleDateOfBirthInput} />
            <label htmlFor="gender" className='font-bold text-[#03627f] pt-3 pb-1 pl-4 sm:ml-5 md:ml-9 text-sm opacity-100 lg:font-light  lg:text-xl  lg:text-white lg:ml-20 '>Gender</label>
            <select className="lg:w-[70%] text-white lg:self-center lg:m-0 ml-4 sm:ml-8 md:ml-12 rounded-lg py-1 px-1 lg:border-[#35b5dc] lg:border-b-2 lg:border-0 border-2 lg:outline-none lg:rounded-lg lg:hover:shadow-[#0688b0] lg:hover:shadow-[0px_10px_10px_0px] lg:focus:hover:shadow-[#0688b0] lg:focus:hover:shadow-[0px_10px_10px_0px]  lg:focus-within:pl-5 shadow-lg font-semibold w-[90%] h-12 lg:bg-[#034458] focus-within:-translate-y-1 hover:-translate-y-1 duration-300 opacity-100 " value={gender} onChange={handleGenderInput}>
            {/* 557781 */}
              <option className='text-white w-10' value="Select Gender">Select Gender</option>
              <option className='text-white w-10' value="male">Male</option>
              <option className='text-white w-10' value="female">Female</option>
              <option className='text-white w-10' value="other">Other</option>
            </select>
            <button className="font-light text-lg text-white py-2 mt-5 rounded-lg bg-black w-[50%] self-center opacity-100 hover:shadow-md hover:shadow-[#0688b0] duration-500"  onClick={handleAllDataSubmit}>Submit</button>
            <div className='flex justify-center mb-2'>
              <label htmlFor="login question" className='self-center text-sm mt-4 font-semibold text-white'>Already have an account?</label>
              <label htmlFor="signup" className='self-center text-sm mt-4 font-bold text-[#8ed8ef] ml-2'>Sign Up</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctor_SignIn;
