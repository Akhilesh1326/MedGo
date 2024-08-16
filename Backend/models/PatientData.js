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

