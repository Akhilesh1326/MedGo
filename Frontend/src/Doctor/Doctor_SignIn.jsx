import { useState } from 'react';
import axios from "axios";
import bgOne from "../assets/upscale1.jpeg";
import { useNavigate } from 'react-router-dom';

const Doctor_SignIn = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [error, setError] = useState("")

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

  function validatInput(fullName, phone, dateOfBirth, gender,) {
    if (fullName == "" && phone == "" && dateOfBirth == "" && gender == "") {
      setError("Fill all the fields before continuing")
      return false
    }
    else if (fullName == "") {
      setError("Fill the Full Name field before continuing")
      return false
    }
    else if (phone == "") {
      setError("Fill the Phone field before continuing")
      return false
    }
    else if (dateOfBirth == "") {
      setError("Fill the Date of birth field before continuing")
      return false
    }
    else if (gender == "") {
      setError("Fill the Gender field before continuing")
      return false
    }
    if(gender=="Select Gender"){
      setError("Select appropriate gender")
      return false
    }
    // const phoneRegex = /^\d{10}$/;

    // if(!phoneRegex.test(Number(phone))){
    //   setError("Please enter the appropriate size of phone digits")
    //   return false
    // }
    return true;
  }
  async function handleAllDataSubmit() {
    if (!validatInput(fullName, phone, dateOfBirth, gender,)) {
      return
    }
    // console.log("ehll ")
    try {
      const response = await axios.post("/api/user/doctor/basicInfo", {
        fullName,
        phone,
        dateOfBirth,
        gender,
      });

      if (response.data.msg === "Stored Successfully") {
        navigate("/user/doctor/personal-information");
      } else {
        setError("Error occurred. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting data:", error);
      setError("Error occurred. Please try again.");
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
        <h1 className='font-bold text-2xl text-[#034458] mt-10'>Sign Up</h1>
        <h1 className='font-bold text-xl text-red-600 mt-10'>{error}</h1>

        <div className="flex lg:border-[#35b5dc] lg:border-4 rounded-xl mt-5 mb-20 md:w-[80%]">
          <div className="hidden flex-row lg:block  lg:w-[70%] text-center font-raleway">
          <div className=" my-2 mx-4 px-4 py-2 font-raleway text-2xl font-think">MedLinea</div>

            <div className='text-3xl font-extrabold text-[#181f20] mb-10'>Welcom To MedLinea</div>
            <div className='text-xl font-light m-1 mb-20'>
              Fill in all the necessary information for signing up with the appropriate format. <span className='text-blue-700 '>Know More</span>
            </div>
            <div>Already a have an Account</div>
            <button className='border-2 border-[#287e98] font-light rounded-full px-4 py-2 mt-2 hover:shadow-lg hover:shadow-[#034458] duration-300 hover:-translate-y-1'>Sign In</button>
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
            <button className="font-light text-lg text-white py-2 mt-7 rounded-lg bg-black w-[50%] self-center opacity-100 hover:shadow-lg hover:shadow-[#0688b0] hover:-translate-y-1 duration-500 mb-8 " onClick={handleAllDataSubmit}>Submit</button>
            {/* <Link to=""><button className="font-light text-lg text-white py-2 mt-5 rounded-lg bg-black w-[50%] self-center opacity-100 hover:shadow-md hover:shadow-[#0688b0] duration-500" >Submit</button></Link> */}
            <div className='lg:hidden flex justify-center mb-2'>
              <label htmlFor="login question" className='self-center text-sm mt-4 font-semibold text-[#034458]'>Already have an account?</label>
              <label htmlFor="signup" className='self-center text-sm mt-4 font-bold text-black ml-2'>Sign In</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctor_SignIn;
