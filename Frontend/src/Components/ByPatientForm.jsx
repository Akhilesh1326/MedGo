import React, { useState } from 'react';
import axios from 'axios';

const ByPatientForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    gender: '',
    phone: '',
    email: '',
    address: '',
    reasonForVisit: '',
    preferredDate: '',
    preferredTime: '',
    medicalHistory: '',
    emergencyContactName: '',
    emergencyContactRelationship: '',
    emergencyContactNumber: '',
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/patient/form-by-patient', formData);
      alert('Form submitted successfully!');
    } catch (error) {
      console.error('Error submitting the form:', error);
      alert('There was an error submitting the form.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-3xl my-10"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Patient Appointment Form</h2>

        {/* Personal Information */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Full Name</label>
          <input  type="text"  name="fullName"  value={formData.fullName}  onChange={handleChange}  className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white"  required/>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1">Date of Birth</label>
            <input  type="date"  name="dateOfBirth"  value={formData.dateOfBirth}  onChange={handleChange}  className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white"  required/>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1    ">Gender</label>
            <select  name="gender"  value={formData.gender}  onChange={handleChange}  className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white"  required>
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>


        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Contact Number</label>
          <input  type="tel"  name="phone"  value={formData.phone}  onChange={handleChange}  className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white"  required/>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Email</label>
          <input  type="email"  name="email"  value={formData.email}  onChange={handleChange}  className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white"  required/>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Address</label>
          <textarea  name="address"  value={formData.address}  onChange={handleChange}  className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white"  rows="3"/>
        </div>


        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Reason for Visit</label>
          <textarea  name="reasonForVisit"  value={formData.reasonForVisit}  onChange={handleChange}  className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white"  rows="3"  required/>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Preffered Date</label>
          <input  type="date"  name="preferredDate"  value={formData.preferredDate}  onChange={handleChange}  className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white"/>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Preffered Time</label>
          <input  type="time"  name="preferredTime"  value={formData.preferredTime}  onChange={handleChange}  className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white"/>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Emergency Contact Name</label>
          <input  type="text"  name="emergencyContactName"  value={formData.emergencyContactName}  onChange={handleChange}  className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white"/>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1">Relationship</label>
            <input  type="text"  name="emergencyContactRelationship"  value={formData.emergencyContactRelationship}  onChange={handleChange}  className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white"/>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Contact Number</label>
            <input  type="tel"  name="emergencyContactNumber"  value={formData.emergencyContactNumber}  onChange={handleChange}  className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white"/>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Medical History</label>
          <textarea  name="medicalHistory"  value={formData.medicalHistory}  onChange={handleChange}  className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white"  rows="3"  required/>
        </div>

        <div className="mb-4 flex items-center">
          <input  type="checkbox"  name="consent"  checked={formData.consent}  onChange={handleChange}  className="mr-2"/>
          <label className="text-sm">I consent to the use of my data for medical purposes.</label>
        </div>

        <button  type="submit"  className="w-full bg-blue-600 hover:bg-blue-700 text-white p-2 rounded font-semibold">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ByPatientForm;
