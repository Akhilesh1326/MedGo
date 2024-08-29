const {
    doctorloginInfo,
    doctorProfessionalInfo,
    doctorIdentificationInfo,
    doctorBasicInfo,
    doctorAgreementInfo
} = require("../models/DoctorData");

// Helper function to standardize responses
// const createResponse = (DBmsg) => ({ DBmsg });
async function handleLoginUser({userName, email, password}){
    try{
        console.log("Received userName:", userName); // Should log 'akhilesh'
        console.log("Type of userName:", typeof userName); // Should log 'string'
    
        const result = await doctorloginInfo.findOne({ userName: userName });
        console.log("result - ", result);
        if(result === null){
            return {userName:"NotFound"}
        }
        return result;
    } catch(err){
        console.log("Error while validating login in controler", err.messsage);
        return {userName:"NotFound"}
    }
}



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
    handleDoctorProfessionalInfo,
    handleLoginUser,
};
