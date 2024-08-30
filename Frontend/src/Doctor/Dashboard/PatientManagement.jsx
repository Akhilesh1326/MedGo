import { Link } from "react-router-dom";
import { useState } from 'react'
import axios from "axios"; 
import HeaderForDashboardComponent from "./HeaderForDashboardComponent"


const PatientManagement = () => {
    const [PatientEditPanel, setPatientEditPanel] = useState(false);
    const [PatientHistoryPanel, setPatientHistoryPanel] = useState(false);

    
    const [fullName, setFullName] = useState("")
    const [dob, setDob] = useState("")
    const [gender, setGender] = useState("")
    const [contactNumber, setContactNumber] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [emergencyContactNumber, setEmergencyContactNumber] = useState("")
    const [emergencyContactName, setEmergencyContactName] = useState("")

    const handleOfflinePatientFormSubmit = async() =>{
        try{
            const resp = await axios.post("/api/user/doctor/offline-registeration-form",{
                fullName,
                dob,
                gender,
                contactNumber,
                email,
                address,
                emergencyContactNumber,
                emergencyContactName
            })
            console.log(resp)
            setFullName("")
            setDob("")
            setGender("")
            setContactNumber("")
            setEmail("")
            setAddress("")
            setEmergencyContactNumber("")
            setEmergencyContactName("")

        } catch(err){
            console.log("Error", err)
        }
    }

    const handlePatientEditPanel = () => {
        setPatientEditPanel(!PatientEditPanel);
    }
    const handlePatientHistoryPanel = () => {
        setPatientHistoryPanel(!PatientHistoryPanel);
    }

    return (
        <div className="bg-slate-800 text-white">
            <HeaderForDashboardComponent />
            <button className="border-2 border-black rounded-xl py-2 px-4 " onClick={handlePatientEditPanel}>Add new Patient</button>
            <div className={`flex flex-col ml-10  border-2 border-black rounded-xl w-fit scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100 z-50 absolute bg-white ${PatientEditPanel ? "" : "hidden"} `}>
                <div className="text-lg font-light my-2 mx-2 text-slate-900 ">Personal Information
                    <button onClick={handleOfflinePatientFormSubmit}>Submit Form</button>
                </div>
                <input className="border-2 border-black rounded-lg text-slate-900 font-light mx-5 my-1 py-2 px-4 " type="text" placeholder="Full name" value={fullName} onChange={(e) => setFullName(e.target.value)}/>
                <input className="border-2 border-black rounded-lg text-slate-900 font-light mx-5 my-1 py-2 px-4 " type="text" placeholder="DOB" value={dob} onChange={(e)=>setDob(e.target.value)}/>
                <input className="border-2 border-black rounded-lg text-slate-900 font-light mx-5 my-1 py-2 px-4 " type="text" placeholder="Gender" value={gender} onChange={(e)=>setGender(e.target.value)}/>
                <div className="text-lg font-light my-2 mx-2 text-slate-900 ">Contact Information:</div>
                <input className="border-2 border-black rounded-lg text-slate-900 font-light mx-5 my-1 py-2 px-4 " type="text" placeholder="Contact Number" value={contactNumber} onChange={(e)=>setContactNumber(e.target.value)}/>
                <input className="border-2 border-black rounded-lg text-slate-900 font-light mx-5 my-1 py-2 px-4 " type="text" placeholder="Email if Available" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <div className="text-lg font-light my-2 mx-2 text-slate-900 ">Address</div>
                <input className="border-2 border-black rounded-lg text-slate-900 font-light mx-5 my-1 py-2 px-4 " type="text" placeholder="complete Address" value={address} onChange={(e)=>setAddress(e.target.value)}/>
                <div className="text-lg font-light my-2 mx-2 text-slate-900 ">Emergency Contact</div>
                <input className="border-2 border-black rounded-lg text-slate-900 font-light mx-5 my-1 py-2 px-4 " type="text" placeholder="Emeregency Contact" value={emergencyContactNumber} onChange={(e)=>setEmergencyContactNumber(e.target.value)}/>
                <input className="border-2 border-black rounded-lg text-slate-900 font-light mx-5 my-1 py-2 px-4 " type="text" placeholder="Emeregency ContactName" value={emergencyContactName} onChange={(e)=>setEmergencyContactName(e.target.value)}/>
                <div className="text-lg font-light my-2 mx-2 text-slate-900 ">Medical Information</div>
                <div className="text-lg font-light my-2 mx-2 text-slate-900 ">Medical History</div>
                <input className="border-2 border-black rounded-lg text-slate-900 font-light mx-5 my-1 py-2 px-4 " type="text" name="" id="" placeholder="Known Allergies (e.g., medications, foods, etc.)" />
                <input className="border-2 border-black rounded-lg text-slate-900 font-light mx-5 my-1 py-2 px-4 " type="text" name="" id="" placeholder="Chronic Conditions (e.g., diabetes, hypertension)" />
                <input className="border-2 border-black rounded-lg text-slate-900 font-light mx-5 my-1 py-2 px-4 " type="text" name="" id="" placeholder="Past Surgeries" />
                <input className="border-2 border-black rounded-lg text-slate-900 font-light mx-5 my-1 py-2 px-4 " type="text" name="" id="" placeholder="Family Medical History (e.g., hereditary diseases)" />
                <div className="text-lg font-light my-2 mx-2 text-slate-900 ">Current Medications</div>
                <input className="border-2 border-black rounded-lg text-slate-900 font-light mx-5 my-1 py-2 px-4 " type="text" placeholder="List of medications currently being taken" />
                <div className="text-lg font-light my-2 mx-2 text-slate-900 ">Blood Type</div>
                <input className="border-2 border-black rounded-lg text-slate-900 font-light mx-5 my-1 py-2 px-4 " type="text" placeholder="blood type" />
                <div className="text-lg font-light my-2 mx-2 text-slate-900 ">Smoking/Alcohol/Drug Use</div>
                <input className="border-2 border-black rounded-lg text-slate-900 font-light mx-5 my-1 py-2 px-4 " type="text" name="" id="" placeholder="Social history" />
                <div className="text-lg font-light my-2 mx-2 text-slate-900 ">Height</div>
                <input className="border-2 border-black rounded-lg text-slate-900 font-light mx-5 my-1 py-2 px-4 " type="text" placeholder="For baseline measurements" />
                <div className="text-lg font-light my-2 mx-2 text-slate-900 ">Height and Weight</div>
                <input className="border-2 border-black rounded-lg text-slate-900 font-light mx-5 my-1 py-2 px-4 " type="text" placeholder="For baseline measurements" />
                <div className="text-lg font-light my-2 mx-2 text-slate-900 ">Insurance Information</div>
                <input className="border-2 border-black rounded-lg text-slate-900 font-light mx-5 my-1 py-2 px-4 " type="text" placeholder="Insurance Provider" />
                <input className="border-2 border-black rounded-lg text-slate-900 font-light mx-5 my-1 py-2 px-4 " type="text" placeholder="Policy Number" />
                <div className="text-lg font-light my-2 mx-2 text-slate-900 ">Optional but useful Information</div>
                <input className="border-2 border-black rounded-lg text-slate-900 font-light mx-5 my-1 py-2 px-4 " type="text" placeholder="Occupation" />
                <input className="border-2 border-black rounded-lg text-slate-900 font-light mx-5 my-1 py-2 px-4 " type="text" placeholder="Marital Status" />
                <input className="border-2 border-black rounded-lg text-slate-900 font-light mx-5 my-1 py-2 px-4 " type="text" placeholder="Preferred Pharmacy" />
            </div>
            <div>Patient History</div>
            <div className="grid grid-cols-4 gap-4 mx-10 place-items-center">

                <div className="flex flex-col border-2 border-black rounded-lg w-fit items-center py-0 px-4">
                    <div className="text-sm">type</div>
                    <img src="" alt="img" className="h-16 w-16 border-2 border-black rounded-full mt-2" />
                    <div>Patient Name</div>
                    <div>contact</div>
                    <div>age</div>
                    <button className={`bg-slate-800 text-white border-2 border-black rounded-full `} onClick={handlePatientHistoryPanel}>Check Patient</button>
                    <div className={`bg-slate-700 absolute z-40 flex flex-col border-2 border-black rounded-lg ml-[400px] w-[450px] ${PatientHistoryPanel ? "" : "hidden"}`}>
                        <div>Full Name</div>
                        <div>Date of Birth (with Age calculation)</div>
                        <div>Gender</div>
                        <div>Contact Information (Phone, Email)</div>
                        <div>Address</div>
                        <div>Emergency Contact Information</div>
                        <div className="text-xl">Medical History Section</div>
                        <div>Allergies: List of known allergies with severity levels if applicable</div>
                        <div>Chronic Conditions: Detailed list of chronic conditions (e.g., diabetes, hypertension)</div>
                        <div>Past Surgeries: Description and dates of any surgeries</div>
                        <div>Family Medical History: Information on hereditary conditions</div>
                        <div className="text-xl">Ongoing Treatments</div>
                        <div>Current Medications</div>
                        <div>Treatment Plans</div>
                        <div>Assigned Healthcare Providers</div>
                        <div className="text-xl">Appointment Records</div>
                        <div>Upcoming Appointments</div>
                        <div>Past Appointments</div>
                        <div className="text-xl"> Medical Documents</div>
                        <div>Lab Results</div>
                        <div>Imaging Results</div>
                        <div>Discharge Summaries</div>
                        <div>Referral Letters:</div>
                        <div className="text-xl"> Insurance and Billing</div>
                        <div>Insurance Information</div>
                        <div>Billing History</div>
                        <div className="text-xl"> Insurance and Billing</div>

                        <button className="bg-slate-800 text-white border-2 border-black rounded-full w-fit" onClick={handlePatientHistoryPanel}>Exit Details</button>
                        <button className="bg-slate-800 text-white border-2 border-black rounded-full w-fit">Edit Details</button>

                    </div>
                </div>
                
            </div>


        </div>
    )
}

export default PatientManagement

