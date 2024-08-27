const {patientBasic, 
    patientIdentification, 
    patientMedicalInformation,
    patientloginCredentials} = require("../models/PatientData")

async function handlePatientBasic(fullName, phone, dateOfBirth, gender) {
    const result = await patientBasic.create({fullName, phone, dateOfBirth, gender});
    return result;
}

async function handlePatientIdentification(governmentIssuedId, adharNumber){
    const result = await patientIdentification.create({governmentIssuedId, adharNumber});
    return result;
}

async function handlePatientMedicalInformation(currentMedications, knowAllergies,medicalHistory, insuranceInformation) {
    const result = await patientMedicalInformation.create({currentMedications, knowAllergies, medicalHistory, insuranceInformation});
    return result
};

async function handlePatientLoginCredentials(username, email, password){
    const result = await patientloginCredentials.create({username, email, password});
    return result;
};

module.exports = {
    handlePatientBasic,
    handlePatientIdentification,
    handlePatientLoginCredentials,
    handlePatientMedicalInformation
};