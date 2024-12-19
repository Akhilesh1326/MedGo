import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './HeaderForDashboardComponent';


const ByPatientFormFill = () => {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    async function getByPatientFormData() {
      try {
        const resp = await axios.get('/api/get-by-patient-form');
        // Assuming the response structure has `response` as the key holding the array
        setAllData(resp.data.response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    getByPatientFormData();
  }, []);

  return (
    <div>
        <Header/>
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Patient Form Data</h1>
      {allData.length > 0 ? (
        <div className="grid gap-4">
          {allData.map((patient, index) => (
            <div
              key={patient._id} // Using unique _id from data for the key
              className="p-4 border rounded shadow-md bg-gray-100"
            >
              <p>
                <strong>Full Name:</strong> {patient.fullName}
              </p>
              <p>
                <strong>Date of Birth:</strong> {patient.dateOfBirth}
              </p>
              <p>
                <strong>Gender:</strong> {patient.gender}
              </p>
              <p>
                <strong>Phone:</strong> {patient.phone}
              </p>
              <p>
                <strong>Email:</strong> {patient.email}
              </p>
              <p>
                <strong>Address:</strong> {patient.address.replace(
                  /\n/g,
                  ', '
                )}
              </p>
              <p>
                <strong>Reason for Visit:</strong> {patient.reasonForVisit}
              </p>
              <p>
                <strong>Preferred Date:</strong> {patient.preferredDate}
              </p>
              <p>
                <strong>Preferred Time:</strong> {patient.preferredTime}
              </p>
              <p>
                <strong>Medical History:</strong> {patient.medicalHistory}
              </p>
              <p>
                <strong>Emergency Contact Name:</strong>{' '}
                {patient.emergencyContactName}
              </p>
              <p>
                <strong>Emergency Contact Number:</strong>{' '}
                {patient.emergencyContactNumber}
              </p>
              <p>
                <strong>Consent:</strong> {patient.consent === 'true' ? 'Yes' : 'No'}
              </p>
            </div>
          ))}
        </div>
        
      ) : (
        <p className="text-gray-500">No data available</p>
      )}
    </div>
    </div>
  );
};

export default ByPatientFormFill;
