import axios from 'axios';
import {useState} from 'react'
import { Link } from 'react-router-dom'

const Doctor_Login_Cred = () => {
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleUsernameInput(e){
    setUsername(e.target.value)
  }
  function handleEmailInput(e){
    setEmail(e.target.value)
  }
  function handlePasswordInput(e){
    setPassword(e.target.value)
  }

const handleAllDataSubmit = async()=>{
  try{
    const response = await axios.post("/api/user/doctor/loginInfo",{
      userName,
      email,
      password
    })
    console.log(response.data);
  }catch(err){
    console.log("Error occured = ",err);
  }
}


  return (
    <div>
      <div className="flex flex-col justify-center items-center">
      <h1>Doctor{"'"}s Sign in page - page2</h1>

        <div className="flex border-black border-2 mt-20 ">
          <div className="border-black border-2">
            <div className="border-blue-400 mx-4 my-4">
              logo
            </div>
          </div>
          <div className="border-black border-2 flex flex-col">
            <label htmlFor="first name">Username</label>
            <input className="border-emerald-500 border-2" type="text" value={userName} onChange={handleUsernameInput}/>
            <label htmlFor="last name">Email</label>
            <input className="border-emerald-500 border-2" type="email" value={email} onChange={handleEmailInput}/>
            <label htmlFor="email">Password</label>
            <input className="border-emerald-500 border-2" type="text" value={password} onChange={handlePasswordInput}/>
            {/* <label htmlFor="gender">Get OTP</label>
            <input className="border-emerald-500 border-2" type="text" /> */}
            
            <Link to="/user/doctor/personal-information"> <button className="border-emerald-300 border-2 content-center">Next</button></Link>
            <button className="border-emerald-300 border-2 content-center" onClick={()=>{handleAllDataSubmit()}}>submit</button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Doctor_Login_Cred
