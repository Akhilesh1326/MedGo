const {
    doctorloginInfo,
    doctorProfessionalInfo,
    doctorIdentificationInfo,
    doctorBasicInfo,
    doctorAgreementInfo
} = require("../models/DoctorData");

// Helper function to standardize responses
// const createResponse = (DBmsg) => ({ DBmsg });

async function handleDoctorLoginInfo(userName, email, password) {
    const result = await doctorloginInfo.create({ userName, email, password });
    return result;

}

async function handleDoctorAgreementInfo(termsAndServices, privacyAndPolicy, consentOfDataSharing) {
    const result = await doctorAgreementInfo.create({ termsAndServices, privacyAndPolicy, consentOfDataSharing });
    return result;
}

async function handleDoctorBasicInfo(fullName, phone, dateOfBirth, gender) {
    const result = await doctorBasicInfo.create({ fullName, phone, dateOfBirth, gender });
    return result;
}

async function handleDoctorProfessionalInfo(medicalLicenseNumber, specialization, yearsOfExperience, medicalSchool, hospitalOrClinic) {
    const result = await doctorProfessionalInfo.create({ medicalLicenseNumber, specialization, yearsOfExperience, medicalSchool, hospitalOrClinic});
    return result;
}

module.exports = {
    handleDoctorLoginInfo,
    handleDoctorAgreementInfo,
    handleDoctorBasicInfo,
    handleDoctorProfessionalInfo
};
