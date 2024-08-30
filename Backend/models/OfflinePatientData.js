const mongoose = require('mongoose');

const OfflinePatientSchema = new mongoose.Schema({
    doctorInformation:{
        doctorId:{type:String, required: true},
        doctorName:{type:String, required: true},
        doctorOtherInformation:{type:String}
    },
    patientType:{
        type:String,
        required: true,
    },
    personalInformation: {
        fullName: { type: String, required: true },
        dob: { type: Date, required: true },
        gender: { type: String, required: true },
    },
    contactInformation: {
        contactNumber: { type: String, required: true },
        email: { type: String },
    },
    address: {
        completeAddress: { type: String, required: true },
    },
    emergencyContact: {
        contactNumber: { type: String, required: true },
        contactName: { type: String, required: true },
    },
    medicalHistory: {
        allergies: { type: String },
        chronicConditions: { type: String },
        pastSurgeries: { type: String },
        familyMedicalHistory: { type: String },
    },
    medicalInformation: {
        currentMedications: { type: String },
        bloodType: { type: String },
        socialHistory: { type: String },
    },
    height: {
        type: String,
    },
    Weight:{
        type: String,
    },
    insuranceInformation: {
        provider: { type: String },
        policyNumber: { type: String },
    },
    optionalInformation: {
        occupation: { type: String },
        maritalStatus: { type: String },
        preferredPharmacy: { type: String },
    },
}, { timestamps: true });

const Patient = mongoose.model('Patient', OfflinePatientSchema);

module.exports = Patient;
