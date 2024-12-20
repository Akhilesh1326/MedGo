import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bgOne from "../assets/upscale1.jpeg";

const Doctor_Login_Cred = () => {
  const navigate = useNavigate();
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleUsernameInput(e) {
    setUsername(e.target.value);
  }

  function handleEmailInput(e) {
    setEmail(e.target.value);
  }

  function handlePasswordInput(e) {
    setPassword(e.target.value);
  }

  function validatInput(userName, email, password){
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if(userName=="" && email=="" && password==""){
      setError("Fill all the fields before continuing")
      return false
    }
    else if(userName==""){
      setError("Fill Username field")
      return false
    }
    else if(email==""){
        setError("Fill email field")
      return false
    }
    else if(password==""){
      setError("Fill password field")
      return false
    }
    if(!emailRegex.test(email)){
      setError("Email Adress format is incorrect")
      return false;
    }
    return true
  }

  const handleAllDataSubmit = async () => {
    if(!validatInput(userName, email, password)){
      return
    }
    try {
      const response = await axios.post("/api/user/doctor/loginInfo", {
        userName,
        email,
        password
      });

      const { msg } = response.data;

      if (msg === "UserFound") {
        console.log("navigating");
        navigate("/user/doctor/signin");
      } else {
        setError(msg);
      }

    } catch (err) {
      console.log("Error occurred:", err);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div>
      <div
        className="flex flex-col justify-center items-center z-0 h-screen"
        style={{
          backgroundImage: `url(${bgOne})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="font-bold text-2xl text-[#034458] mt-10 font-raleway">
          Login Credentials
        </h1>
        <div className="font-bold text-xl text-red-600 mt-10 font-raleway">
          {error}
        </div>
        <div className="flex lg:border-[#35b5dc] lg:border-4 rounded-xl mt-5 mb-20 md:w-[80%]">
          <div className="hidden flex-row lg:block lg:w-[70%] text-center font-raleway">
          <div className=" my-2 mx-4 px-4 py-2 font-raleway text-2xl font-think">MedLinea</div>

            <div className="text-3xl font-extrabold text-[#181f20] mb-10">
              Welcome To MedLinea
            </div>
            <div className="text-xl font-light m-1 mb-16">
              Empower your healthcare experience! Join us to manage appointments effortlessly and access personalized care.{" "}
              <span className="text-blue-700">Know More</span>
            </div>
            <div>Already have an Account</div>
            <button className="border-2 border-[#287e98] font-light rounded-full px-4 py-2 mt-2 mb-4 hover:shadow-lg hover:shadow-[#034458] duration-300 hover:-translate-y-1">
              Sign In
            </button>
          </div>
          <div className="flex flex-col w-screen lg:bg-[#034458] opacity-90 lg:rounded-bl-3xl rounded-tl-3xl rounded-r-lg">
            <label
              htmlFor="full name"
              className="font-bold text-[#03627f] pt-3 pb-1 pl-4 sm:ml-5 md:ml-9 text-sm opacity-100 lg:font-light lg:text-xl lg:text-white lg:ml-20 lg:mt-5"
            >
              Username
            </label>
            <input
              className="lg:w-[70%] lg:self-center lg:m-0 ml-4 sm:ml-8 md:ml-12 rounded-lg py-1 px-1 lg:border-[#35b5dc] lg:border-b-2 lg:border-0 border-2 lg:outline-none lg:rounded-lg text-[#034458] lg:hover:shadow-[#0688b0] lg:hover:shadow-[0px_10px_10px_0px] lg:focus:hover:shadow-[#0688b0] lg:focus:hover:shadow-[0px_10px_10px_0px] lg:focus-within:pl-5 lg:text-white shadow-lg font-semibold w-[90%] h-12 lg:bg-[#034458] focus-within:-translate-y-1 hover:-translate-y-1 duration-300 opacity-100"
              type="text"
              placeholder="Enter Unique Username"
              value={userName}
              onChange={handleUsernameInput}
            />
            <label
              htmlFor="email"
              className="font-bold text-[#03627f] pt-3 pb-1 pl-4 sm:ml-5 md:ml-9 text-sm opacity-100 lg:font-light lg:text-xl lg:text-white lg:ml-20"
            >
              Email
            </label>
            <input
              className="lg:w-[70%] lg:self-center lg:m-0 ml-4 sm:ml-8 md:ml-12 rounded-lg py-1 px-1 lg:border-[#35b5dc] lg:border-b-2 lg:border-0 border-2 lg:outline-none lg:rounded-lg text-[#034458] lg:hover:shadow-[#0688b0] lg:hover:shadow-[0px_10px_10px_0px] lg:focus:hover:shadow-[#0688b0] lg:focus:hover:shadow-[0px_10px_10px_0px] lg:focus-within:pl-5 lg:text-white shadow-lg font-semibold w-[90%] h-12 lg:bg-[#034458] focus-within:-translate-y-1 hover:-translate-y-1 duration-300 opacity-100"
              type="email"
              placeholder="Enter Unique Email"
              value={email}
              onChange={handleEmailInput}
            />
            <label
              htmlFor="password"
              className="font-bold text-[#03627f] pt-3 pb-1 pl-4 sm:ml-5 md:ml-9 text-sm opacity-100 lg:font-light lg:text-xl lg:text-white lg:ml-20"
            >
              Password
            </label>
            <input
              className="lg:w-[70%] lg:self-center lg:m-0 ml-4 sm:ml-8 md:ml-12 rounded-lg py-1 px-1 lg:border-[#35b5dc] lg:border-b-2 lg:border-0 border-2 lg:outline-none lg:rounded-lg text-[#034458] lg:hover:shadow-[#0688b0] lg:hover:shadow-[0px_10px_10px_0px] lg:focus:hover:shadow-[#0688b0] lg:focus:hover:shadow-[0px_10px_10px_0px] lg:focus-within:pl-5 lg:text-white shadow-lg font-semibold w-[90%] h-12 lg:bg-[#034458] focus-within:-translate-y-1 hover:-translate-y-1 duration-300 opacity-100"
              type="password"
              placeholder="Enter Complex Password"
              value={password}
              onChange={handlePasswordInput}
            />
            <button
              className="font-light text-lg text-white py-2 mt-12 rounded-lg bg-black w-[50%] self-center opacity-100 hover:shadow-lg hover:shadow-[#0688b0] hover:-translate-y-1 duration-500"
              onClick={handleAllDataSubmit}
            >
              Submit
            </button>
            <div className="lg:hidden flex justify-center mb-2">
              <label
                htmlFor="login question"
                className="self-center text-sm mt-4 font-semibold text-[#034458]"
              >
                Already have an account?
              </label>
              <label
                htmlFor="signup"
                className="self-center text-sm mt-4 font-bold text-black ml-2"
              >
                Sign In
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctor_Login_Cred;
