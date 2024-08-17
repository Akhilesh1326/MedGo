const { json } = require("express");
const doctorAgreementInfo = require("../models/DoctorData");
const doctorBasicInfo = require("../models/DoctorData");
const doctorIdentificationInfo = require("../models/DoctorData");
const doctorloginInfo = require("../models/DoctorData");
const doctorProfessionalInfo = require("../models/DoctorData");

async function handleDoctorLoginInfo(userName, email, password){
    const result = await doctorloginInfo.create({
        userName,
        email,
        password
    })
    return json({DBmsg:"accept"})
}

async function handleDoctorAgreementInfo(termsAndServices,privacyAndPolicy, consentOfDataSharing){
    const result = await doctorAgreementInfo.create({
        termsAndServices,
        privacyAndPolicy,
        consentOfDataSharing,
    });
    return json({DBmsg:"accept"})
    
}

async function handleDoctorBasicInfo(fName, phone, dob, gender){
    const result =  await doctorBasicInfo.create({
        fName,
        phone,
        dob,
        gender
    });
    return json({DBmsg:"accept"})
}

async function handleDoctorProfessionalInfo(licenseNumber, specialization, yearsofExperience, medicalSchool, hospitalOrClinic){
    const result = await doctorProfessionalInfo.create({
        licenseNumber,
        specialization,
        yearsofExperience,
        medicalSchool,
        hospitalOrClinic,
    });
    return json({DBmsg:"accept"})
}