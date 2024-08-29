import { Link } from "react-router-dom";
import { useState } from 'react'
import HeaderForDashboardComponent from "./HeaderForDashboardComponent"


const PatientManagement = () => {
    const [PatientEditPanel, setPatientEditPanel] = useState(false);
    const [PatientHistoryPanel, setPatientHistoryPanel] = useState(false);

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
            <div className={`border-2 border-black rounded-xl w-fit scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100 z-50 absolute bg-white ${PatientEditPanel ? "" : "hidden"} `}>
                <div>Personal Information</div>
                <input type="text" placeholder="Full name" />
                <input type="text" placeholder="DOB" />
                <input type="text" placeholder="Gender" />
                <div>Contact Information:</div>
                <input type="text" placeholder="Contact Number" />
                <input type="text" placeholder="Email if Available" />
                <div>Address</div>
                <input type="text" placeholder="complete Address" />
                <div>Emergency Contact</div>
                <input type="text" placeholder="Emeregency Contact" />
                <input type="text" placeholder="Emeregency ContactName" />
                <div>Medical Information</div>
                <div>Medical History</div>
                <input type="text" name="" id="" placeholder="Known Allergies (e.g., medications, foods, etc.)" />
                <input type="text" name="" id="" placeholder="Chronic Conditions (e.g., diabetes, hypertension)" />
                <input type="text" name="" id="" placeholder="Past Surgeries" />
                <input type="text" name="" id="" placeholder="Family Medical History (e.g., hereditary diseases)" />
                <div>Current Medications</div>
                <input type="text" placeholder="List of medications currently being taken" />
                <div>Insurance Information</div>
                <input type="text" placeholder="Insurance Provider" />
                <input type="text" placeholder="Policy Number" />
                <div>Blood Type</div>
                <input type="text" placeholder="blood type" />
                <div>Smoking/Alcohol/Drug Use</div>
                <input type="text" name="" id="" placeholder="Social history" />
                <div>Height and Weight</div>
                <input type="text" placeholder="For baseline measurements" />
                <div>Optional but useful Information</div>
                <input type="text" placeholder="Occupation" />
                <input type="text" placeholder="Marital Status" />
                <input type="text" placeholder="Preferred Pharmacy" />
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

