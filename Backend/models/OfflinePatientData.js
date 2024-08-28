const mongoose = require('mongoose');

const OfflinePatientSchema = new mongoose.Schema({
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
    medicalInformation: {
        medicalHistory: {
            allergies: { type: String },
            chronicConditions: { type: String },
            pastSurgeries: { type: String },
            familyMedicalHistory: { type: String },
        },
        currentMedications: { type: String },
        bloodType: { type: String },
        socialHistory: { type: String },
    },
    insuranceInformation: {
        provider: { type: String },
        policyNumber: { type: String },
    },
    heightAndWeight: {
        type: String,
    },
    optionalInformation: {
        occupation: { type: String },
        maritalStatus: { type: String },
        preferredPharmacy: { type: String },
    },
    patientHistory: {
        fullName: { type: String },
        dobWithAge: { type: String },
        gender: { type: String },
        contactInformation: {
            phone: { type: String },
            email: { type: String },
        },
        address: { type: String },
        emergencyContactInformation: {
            contactNumber: { type: String },
            contactName: { type: String },
        },
        medicalHistorySection: {
            allergies: { type: String },
            chronicConditions: { type: String },
            pastSurgeries: { type: String },
            familyMedicalHistory: { type: String },
        },
        ongoingTreatments: {
            currentMedications: { type: String },
            treatmentPlans: { type: String },
            assignedHealthcareProviders: { type: String },
        },
        appointmentRecords: {
            upcomingAppointments: { type: String },
            pastAppointments: { type: String },
        },
        medicalDocuments: {
            labResults: { type: String },
            imagingResults: { type: String },
            dischargeSummaries: { type: String },
            referralLetters: { type: String },
        },
        insuranceAndBilling: {
            insuranceInformation: { type: String },
            billingHistory: { type: String },
        },
    }
}, { timestamps: true });

const Patient = mongoose.model('Patient', OfflinePatientSchema);

module.exports = Patient;
