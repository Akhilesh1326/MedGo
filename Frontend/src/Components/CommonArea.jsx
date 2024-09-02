import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import axios from "axios";

const MyComponent = () => {
    const [appoinmentData, setAppointmentData] = useState([]);
    const [socketMsg, setSocketMsg] = useState("");

    useEffect(() => {
        async function handleCardAppointmentData() {
            console.log("getting it")
            try{
                const resp = await axios.get("/api/user/all-appointment-data")
                console.log("Response = ",resp);
                console.log("Response = ",resp.data.result);
                setAppointmentData(resp.data.result);
                // console.log("Response = ",resp);
            } catch(err){
                console.log("Error = ",err);
            }
        }

        const socket = io("http://localhost:8000");
    
        socket.on("connect", () => {
            console.log("Socket is connected");
        });
    
        socket.on("message", (message) => {
            console.log("Message from server:", message);
            setSocketMsg(message);
    
            // Assuming 'message' is an array or can be spread
            // setAppointments(prevAppointments => [...prevAppointments, ...message]);
        });
        handleCardAppointmentData();
    
        return () => {
            socket.disconnect();
        };

        
    },[socketMsg]);
    

    return (
        <div>
            <h1>Appoinments</h1>
            {appoinmentData.map((item)=>(
                <div key={item._id} className='w-fit flex flex-col text-center border-2 border-blue-900 py-2 px-4 rounded-xl'>
                {/* <img src='' alt='doct' className='bg-slate-700 rounded-full py-1 px-2'> */}
                <img src="no" alt="img" className='bg-slate-700 rounded-full   w-16 h-16 self-center' />
                <label className='' htmlFor="Doctor name">{item.doctorName}</label>
                <label htmlFor="review">{item.timeOfAppointment}</label>
                <label className='' htmlFor="description">{item.dateOfAppointment}</label>
                <label className='' htmlFor="description">{item.locationOfAppointment}</label>
                <button className='border-2 border-black bg-slate-900 rounded-full text-white py-1 px-2'>book an appoinment</button>
            </div>
            ))}
        </div>
    );
};

export default MyComponent;
