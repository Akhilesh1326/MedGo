const OfflinePatientSchema = require("../models/OfflinePatientData");

async function handleOfflinePatientEntry({doctorId, doctorName, doctorOtherInformation, fullName, dob, gender, contactNumber, email, completeAddress, emergencyContactNumber, emergencyContactName, allergies, chronicConditions, pastSurgeries, familyMedicalHistory, currentMedications, bloodType, socialHistory, insuranceProvider, policyNumber, heightAndWeight, occupation, maritalStatus, preferredPharmacy, dobWithAge, ongoingTreatmentPlans, assignedHealthcareProviders, upcomingAppointments, pastAppointments, labResults, imagingResults, dischargeSummaries, referralLetters, insuranceAndBillingHistory }) {
    
    // Map the flat object to the nested schema structure
    const mappedPatientData = {
        doctorInformation:{
            doctorId,
            doctorName,
            doctorOtherInformation,
        },
        personalInformation: {
            fullName,
            dob,
            gender,
        },
        contactInformation: {
            contactNumber,
            email,
        },
        address: {
            completeAddress,
        },
        emergencyContact: {
            contactNumber: emergencyContactNumber,
            contactName: emergencyContactName,
        },
        medicalInformation: {
            medicalHistory: {
                allergies,
                chronicConditions,
                pastSurgeries,
                familyMedicalHistory,
            },
            currentMedications,
            bloodType,
            socialHistory,
        },
        insuranceInformation: {
            provider: insuranceProvider,
            policyNumber,
        },
        heightAndWeight,
        optionalInformation: {
            occupation,
            maritalStatus,
            preferredPharmacy,
        },
        patientHistory: {
            fullName,
            dobWithAge,
            gender,
            contactInformation: {
                phone: contactNumber,
                email,
            },
            address: completeAddress,
            emergencyContactInformation: {
                contactNumber: emergencyContactNumber,
                contactName: emergencyContactName,
            },
            medicalHistorySection: {
                allergies,
                chronicConditions,
                pastSurgeries,
                familyMedicalHistory,
            },
            ongoingTreatments: {
                currentMedications,
                treatmentPlans: ongoingTreatmentPlans,
                assignedHealthcareProviders,
            },
            appointmentRecords: {
                upcomingAppointments,
                pastAppointments,
            },
            medicalDocuments: {
                labResults,
                imagingResults,
                dischargeSummaries,
                referralLetters,
            },
            insuranceAndBilling: {
                insuranceInformation: `${insuranceProvider}, Policy #${policyNumber}`,
                billingHistory: insuranceAndBillingHistory,
            },
        }
    };

    try {
        const result = await OfflinePatientSchema.create(mappedPatientData);
        return result;
    } catch (error) {
        console.error('Error creating patient record:', error);
        throw error; // Rethrow the error to handle it in the calling function if needed
    }
}

module.exports = {
    handleOfflinePatientEntry
};
