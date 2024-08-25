import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const MyComponent = () => {
    const [appoinment, setAppointments] = useState([]);

    useEffect(() => {
        const socket = io("http://localhost:8000");

        socket.on("connect", () => {
            console.log("Socket is connected");
        });

        socket.on("message", (message) => {
            console.log("message from frontend = ", message);
            setAppointments(prevAppointments => [...prevAppointments, ...message]);
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    return (
        <div>
            <h1>Appoinments</h1>
            <h1>
                {appoinment.map(item => (
                    <div key={item.id}>
                        <div>{item.name}</div>
                        <div>{item.main}</div>
                        <div>{item.date}</div>

                    </div>

                ))}
            </h1>
            <div className='w-fit flex flex-col text-center border-2 border-blue-900 py-2 px-4 rounded-xl'>
                {/* <img src='' alt='doct' className='bg-slate-700 rounded-full py-1 px-2'> */}
                <img src="no" alt="img" className='bg-slate-700 rounded-full   w-16 h-16 self-center' />
                <label className='' htmlFor="Doctor name">name of the doctor</label>
                <label htmlFor="review">timing</label>
                <label className='' htmlFor="description">date</label>
                <label className='' htmlFor="description">review</label>
                <button className='border-2 border-black bg-slate-900 rounded-full text-white py-1 px-2'>book an appoinment</button>
            </div>
        </div>
    );
};

export default MyComponent;
