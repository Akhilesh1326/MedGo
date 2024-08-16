const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/MedicalAppDataBase")
.then(()=>console.log("Database Connnected"))
.catch((err)=>console.log("Database having problmes"));

//Basic Information for Doctor, Table-1
const DoctorBasicInfo = new mongoose.Schema({
    fullName:{
        type: String,
        required: true,
    },
    phone:{
        type: Number,
        required: false
    },
    dateOfBirth:{
        type: String,
        required: true,
    },
    gender:{
        type: String,
        required: true
    }
},{timestamps:true});

const doctorBasicInfo = mongoose.model('doctorUserBasicInfo', DoctorBasicInfo);

// Professional Information for Doctor, Table-2
const DoctorProfessionalInfo = new mongoose.Schema({
    medicalLicenseNumber:{
        type: String,
        required: true,
    },
    specialization:{
        type: String,
        required: true,
    },
    yearsofExperience:{
        type: String,
        required: true,
    },
    medicalSchool:{
        type: String,
        required: true,
    },
    hospitalOrClinic:{
        type: String,
        required: true,
    },
    Certifications:{
        type: String,
        required: true,
    },
},{timestamps:true});

const doctorProfessionalInfo = mongoose.Model('doctorUserProfessionalInfo', DoctorProfessionalInfo);

const DoctorIdentificationInfo = new mongoose.Schema({
    proofOfMedicalLicense:{
        type: String,
        required: true,
    },
    proofOfIdentity:{
        type: String,
        required: true,
    },
},{timestamps:true});

const doctorIdentificationInfo = mongoose.model("doctorUserIdentificationInfo", DoctorIdentificationInfo);

const DoctorloginInfo = new mongoose.Schema({
    userName:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
},{timestamps:true})

const doctorloginInfo = mongoose.model("doctorUserLoginInfo", DoctorloginInfo);

const DoctorAgreementInfo = mongoose.Schema({
    termsAndServices:{
        type: String,
        required: true,
    },
    privacyAndPolicy:{
        type: String,
        required: true,
    },
    consentOfDataSharing:{
        type: String,
        required: true,
    },
})

const doctorAgreementInfo = mongoose.Model("doctorUserAgreementInfo", DoctorAgreementInfo);


