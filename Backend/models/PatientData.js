const mongoose = require('mongoose');

const PatientBasic = new mongoose.Schema({
    fullName:{
        type: String,
        required: true,
    },
    phone:{
        type: Number,
        required: true,
    },
    dateOfBirth:{
        type: String,
        required: true,
    },
    gender:{
        type: String,
        required: true,
    },
},{timestamps:true});

const patientBasic  = mongoose.model("patientUserBasic", PatientBasic);

const PatientMedicalInformation = new mongoose.Schema({
    currentMedications:{
        type: String,
        
    },
    knowAllergies:{
        type: String,
    },
    medicalHistory:{
        type: String,
    },
    insuranceInformation:{
        type: String,
    },
}, {timestamps: true});

const patientMedicalInformation = mongoose.model("patientUserMedicalInformation", PatientMedicalInformation);

const PatientIdentification = new mongoose.Schema({
    governmentIssuedId: {
        type: String,
        required: true,
    },
    adharNumber: {
        type: Number,
        required: true,
    }
}, {timestamps: true});

const patientIdentification = mongoose.model("patientUserIdentification", PatientIdentification);

const PatientLoginCredentials = new mongoose.Schema({
    username:{
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    
}, {timestamps:true});

const patientloginCredentials = mongoose.model("patientUserLoginCredentials", PatientLoginCredentials);

module.exports ={
    patientBasic,
    patientIdentification,
    patientMedicalInformation,
    patientloginCredentials,
};
