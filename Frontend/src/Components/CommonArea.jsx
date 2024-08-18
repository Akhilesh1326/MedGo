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
                {appoinment.map(item=>(
                    <div key={item.id}>
                        <div>{item.name}</div>
                        <div>{item.main}</div>
                        <div>{item.date}</div>

                    </div>
                ))}
            </h1>
        </div>
    );
};

export default MyComponent;
