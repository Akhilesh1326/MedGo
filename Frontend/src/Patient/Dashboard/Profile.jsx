import  { useEffect } from 'react'
import axios from 'axios'

const Profile = () => {

    useEffect(()=>{
        async function handlePatientProfileInfo() {
            try {
                const resp = await axios.get("/api/user/patient/all-profile-data");
                console.log(resp);
            } catch (error) {
                console.log("Error while getting all patient profie data = ",error)
            }
        }
        handlePatientProfileInfo();
    },[])
  return (
    <div>
      
    </div>
  )
}

export default Profile
