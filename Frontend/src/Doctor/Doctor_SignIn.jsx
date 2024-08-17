import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

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
      <div className="flex flex-col justify-center items-center">
        <h1>Doctor{"'"}s Sign in page - page1</h1>
        <div className="flex border-black border-2 mt-20 ">
          <div className="border-black border-2">
            <div className="border-blue-400 mx-4 my-4">
              logo
            </div>
          </div>
          <div className="border-black border-2 flex flex-col">
            <label htmlFor="full name">Full Name</label>
            <input className="border-emerald-500 border-2" type="text" value={fullName} onChange={handleFullNameInput} />
            <label htmlFor="Phone">Phone</label>
            <input className="border-emerald-500 border-2" type="text" value={phone} onChange={handlePhoneInput} />
            <label htmlFor="dob">DOB</label>
            <input className="border-emerald-500 border-2" type="date" value={dateOfBirth} onChange={handleDateOfBirthInput} />
            <label htmlFor="gender">Gender</label>
            <input className="border-emerald-500 border-2" type="text" value={gender} onChange={handleGenderInput} />
            
            <Link to="/user/doctor/login-credentials"> <button className="border-emerald-300 border-2 content-center">Next</button></Link>
            <button className="border-emerald-300 border-2 content-center" onClick={handleAllDataSubmit}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctor_SignIn;
