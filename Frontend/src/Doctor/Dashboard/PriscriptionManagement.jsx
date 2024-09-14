import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './HeaderForDashboardComponent';

const PriscriptionManagement = () => {
  const [prescriptionData, setPrescriptionData] = useState([]);

  useEffect(() => {
    // Fetch prescription data from the API
    async function getAllPres() {
      try {
        const resp = await axios.get('/api/user/doctor/prescriptions') // Adjust API endpoint as necessary
        console.log("All pres = ",resp)
        setPrescriptionData(resp.data.msg)
      } catch (error) {
        console.log("Error getting data = ",error);
      }
    }
    getAllPres();
      
  }, []);

  return (
    <div>
      <Header />
      <div className="p-6 bg-[#e7f0fb] min-h-screen">
        <h2 className="text-2xl font-semibold text-[#355A8A] mb-4">Your Prescriptions</h2>
        <div className="grid grid-cols-1 gap-6">
          {prescriptionData.length > 0 ? (
            prescriptionData.map((prescription, index) => (
              <div
                key={index}
                className="bg-[#96BADC] text-[#355A8A] p-4 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold mb-2 flex">Diagnosis: {prescription.diagnosis}</h3>
                <div className="mb-2">
                  <strong>Medication:</strong> {prescription.medication}
                </div>
                <div>
                  <strong>Instructions:</strong> {prescription.instructions}
                </div>
              </div>
            ))
          ) : (
            <p className="text-[#355A8A]">No prescriptions available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PriscriptionManagement;
