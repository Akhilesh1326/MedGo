const mongoose = require("mongoose")

const patientFillingForm = new mongoose.Schema({
    fullName:{
        type:String,
        require:true,
    },
    dateOfBirth:{
        type:String,
        require:true,
    },
    gender:{
        type:String,
        require:true,
    },
    phone:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    address:{
        type:String,
        require:true,
    },
    reasonForVisit:{
        type:String,
        require:true,
    },
    preferredDate:{
        type:String,
        require:true,
    },
    preferredTime:{
        type:String,
        require:true,
    },
    medicalHistory:{
        type:String,
        require:true,
    },
    emergencyContactName:{
        type:String,
        require:true,
    },
    emergencyContactRelation:{
        type:String,
        require:true,
    },
    emergencyContactNumber:{
        type:String,
        require:true,
    },
    consent:{
        type:String,
        require:true,
    },
},{timestamps:true})

const PatientFillingForm = mongoose.model("patientFillingFormSchema", patientFillingForm);

module.exports={
    PatientFillingForm,
}