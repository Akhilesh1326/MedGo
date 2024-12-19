import React, { useState } from 'react';
import axios from 'axios';
import Header from './HeaderForDashboardComponent'


const MedicineCompare = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/patient/medicine-compare', { input });
      setOutput(response.data.response);
      console.log(response.data.response);
    } catch (error) {
      console.error('Error calling the API', error);
      setOutput('Error fetching response');
    }
  };

  return (
    <div>

    <Header/>
    <div className="flex items-center justify-center min-h-screen bg-[#195085] ">
      <div className="bg-[#0a2035] pb-8 pl-8 pr-8 pt-4  shadow-md rounded-lg w-full max-w-lg">
      <div className=" mx-4 px-4 font-raleway text-3xl font-think text-center mb-4 text-white">MedLinea</div>

        <h1 className="text-2xl font-bold text-white mb-6 text-center font-raleway ">Medicine Compare</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-lg font-medium text-white mb-2">
              Input name of Medicine:
            </label>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter your text here"
              className="w-full px-4 py-2 border rounded-md shadow-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="border-2 border-black py-2 w-full rounded-lg font-bold bg-[#EDE9E3] text-slate-800 hover:-translate-y-1 shadow-[0px_0px_0px_1px_#206ef6] hover:shadow-[0px_0px_10px_2px_#206ef6] duration-300"
          >
            Submit
          </button>
        </form>
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-white mb-2">Compared Medicines:</h2>
          <div className="w-full px-4 py-2 border rounded-md bg-gray-50 text-slate-900 shadow-sm">
            {output}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default MedicineCompare;
