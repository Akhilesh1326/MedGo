import { useState } from "react"
import { Link } from "react-router-dom";

const AboutUs = () => {
    return (
        <div>
            <div>
                <div className='flex justify-between py-8 px-4  bg-[#1c5081] font-light text-lg text-white'>
                    <span className='font-raleway text-2xl text-[#9dc3e9] font-bold'>Medlinea</span>
                    <Link to="/"><button className='mx-2 bg-[#96BADC] py-1 px-3 rounded-lg duration-300 hover:shadow-[#3794eb] hover:shadow-md hover:-translate-y-1'>Home</button></Link>

                </div>
            </div>
        </div>
    )
};

export default AboutUs;