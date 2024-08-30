const express = require('express');
const connectDB = require('./connectDB');
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require('cors');
const { Server } = require("socket.io");
const http = require("http");
const jwt = require('jsonwebtoken');
require('dotenv').config()

const app = express();
// HTTP server 
const server = http.createServer(app);

// Socket server
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:5173', // Allow only your React app's origin
        methods: ['GET', 'POST'],
        credentials: true                // Allow cookies and other credentials
    }
});

// WebSocket initialization
io.on("connection", (socket) => {
    // Receive message from client
    socket.on("client-message", (message) => {
        console.log("Message from client:", message);

        // Send a response back to the client
        io.emit("message", message);
    });

    // Handle client disconnection
    socket.on("disconnect", () => {
        console.log("Socket.io client disconnected");
    });
});

// For REST API calls
app.use(cors({
    origin: 'http://localhost:5173', // Allow only your React app's origin
    methods: ['GET', 'POST'],        // Allow specific HTTP methods
    credentials: true                // Allow cookies and other credentials
}));


// DB Module imports for Doctors
const {
    handleDoctorBasicInfo,
    handleDoctorAgreementInfo,
    handleDoctorLoginInfo,
    handleDoctorProfessionalInfo,
    handleLoginUser,
} = require("./controllers/doctor");
// DB Module imports for Patients

const {
    handlePatientBasic,
    handlePatientIdentification,
    handlePatientLoginCredentials,
    handlePatientMedicalInformation,
} = require("./controllers/patient")

// offline patient registration

const handleOfflinePatientEntry = require("./controllers/OfflinePatient");


// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// DataBase Connect
connectDB.connectToDB(process.env.MONGODB ?? "mongodb://127.0.0.1:27017/MedicalAppDataBase")
    .then(() => {
        console.log("DB connected");
    });

// REST API calling
app.post("/api/user/doctor/basicInfo", async (req, res) => {
    try {
        const { fullName, phone, dateOfBirth, gender } = req.body;
        console.log(fullName, phone, dateOfBirth, gender);

        const result = await handleDoctorBasicInfo(fullName, phone, dateOfBirth, gender);
        console.log(result);

        res.json({ msg: "Data sent", result });
    } catch (error) {
        console.error("Error saving basic info:", error);
        res.status(500).json({ msg: "Error occurred", error: error.message });
    }
});

app.post('/api/user/doctor/loginInfo', async (req, res) => {
    try {
        const { userName, email, password } = req.body;
        console.log(userName, email, password);

        const result = await handleDoctorLoginInfo(userName, email, password);
        res.json({ msg: "Data sent", result });
    }
    catch (err) {
        console.error("Error sending Login Info: ", err);
        res.status(500).json({ msg: "Error Occured", error: err.message });
    }
});

app.post('/api/user/doctor/professionalInfo', async (req, res) => {
    try {
        const { medicalLicenseNumber, specialization, yearsOfExperience, medicalSchool, hospitalOrClinic } = req.body;
        console.log(medicalLicenseNumber, specialization, yearsOfExperience, medicalSchool, hospitalOrClinic);
        const result = await handleDoctorProfessionalInfo(medicalLicenseNumber, specialization, yearsOfExperience, medicalSchool, hospitalOrClinic);
        res.json({ msg: "Data Sent", result });
    } catch (err) {
        console.error("Error occured = ", err);
        res.status(500).json({ msg: "Error Occured", error: err.message });
    }
});

app.post('/api/user/doctor/agreementInfo', async (req, res) => {
    try {
        const { termsAndServices, privacyAndPolicy, consentOfDataSharing } = req.body;
        console.log(termsAndServices, privacyAndPolicy, consentOfDataSharing);
        const result = await handleDoctorAgreementInfo(termsAndServices, privacyAndPolicy, consentOfDataSharing);
        res.json({ msg: "Data Sent", result });
    } catch (err) {
        console.error("Error Occured while post of Agreement = ", err);
        res.status(500).json({ msg: "Error Occured", error: err.message });
    }
});

const secret = "akhilesh";

// API Call Login Check for Doctor User
app.post('/api/user/check/login-credentials', async(req, res)=>{
    try{
        const logCred = req.body;
        console.log("logCred = ",logCred);
        const result = await handleLoginUser(logCred)
        console.log("Server Result = ",result);
        const Id = result._id;
        const UId = Id.toString();
        console.log("User Id = ",Id.toString());
        if(result.userName===logCred.userName){
            const token = jwt.sign({
                UserId: UId,
                name:result.userName,
                email:result.email,
                password:result.password,
            },process.env.JWT_SECRET);
            res.cookie("userCookie", token) 
            res.json({ msg: "UserFound", result });
        }
        else{
            res.json({ msg: "UserNotFound", result });
        }

    }catch(err){
        console.error("Error Occured while Login Validation = ",err.message);
        res.status(500).json({ msg: "Error Occured", error: err.message });
    }
});

app.post('/api/user/doctor/offline-Patient-Regiter/', async (req, res) => {
    try {
        const offlinePatientRegistration = req.body;
        console.log(offlinePatientRegistration);
        // const result = await handleOfflinePatientEntry(offlinePatientRegistration);
        res.json({ msg: "Data sent", result });
    } catch (err) {
        console.log("Error Occured While registering the offline patinet form", err);
        res.status(500).json({ msg: "Error Occured", error: err.message });
    }
})

app.post('/api/user/patient/basicInfo', async (req, res) => {
    try {
        const { fullName, phone, dateOfBirth, gender } = req.body;
        console.log(fullName, phone, dateOfBirth, gender);

        const result = handlePatientBasic(fullName, phone, dateOfBirth, gender);
        console.log(result);

        res.json({ msg: "Data sent", result });
    } catch (error) {
        console.log("Error occured while saving basic info of patient: ", error);
        res.status(500).json({ msg: "Error Occured", error: error.message });
    }
});

app.post('/api/user/patient/medicalInfo', async (req, res) => {
    try {
        const { currentMedicatioins, knowAllergies, medicalHistory, insuranceInformation } = req.body;
        console.log(currentMedicatioins, knowAllergies, medicalHistory, insuranceInformation);

        const result = handlePatientMedicalInformation(currentMedicatioins, knowAllergies, medicalHistory, insuranceInformation);
        console.log(result);

        res.json({ msg: "Data sent", result });
    } catch (error) {
        console.log("Error occured while saving medical info of patient: ", error);
        res.status(500).json({ msg: "Error Occured", error: error.message });
    }
});
app.post('/api/user/patient/Identification', async (req, res) => {
    try {
        const { governmentIssuedId, adharNumber } = req.body;
        console.log(governmentIssuedId, adharNumber);

        const result = handlePatientIdentification(governmentIssuedId, adharNumber);
        console.log(result);

        res.json({ msg: "Data sent", result });
    } catch (error) {
        console.log("Error occured while saving medical info of patient: ", error);
        res.status(500).json({ msg: "Error Occured", error: error.message });
    }
});
app.post('/api/user/patient/loginInfo', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        console.log(username, email, password);

        const result = handlePatientMedicalInformation(username, email, password);
        console.log(result);

        res.json({ msg: "Data sent", result });
    } catch (error) {
        console.log("Error occured while saving login info of patient: ", error);
        res.status(500).json({ msg: "Error Occured", error: error.message });
    }
});

// Offline Patient Form Registeration through App API Calls

app.post("/api/user/doctor/offline-registeration-form",async(req,res)=>{
    console.log(req.body);
    // console.log(req.cookies.userCookie);
    const token = req.cookies.userCookie;
    if(!token){
        res.json({msg:"Token Not Found"});
    }
    res.json({msg:"got data"});
    try{
        let varifyData = jwt.verify(token, process.env.JWT_SECRET);
        delete varifyData.iat;
        console.log(varifyData);
        const formData = req.body;
        let combo = {...varifyData,...formData}
        console.log(combo);
    } catch(err){

    }
});


// JWT token verify code
// app.post("/user/login", async(req,res)=>{
//     const token = req.cookies.uid;
//     if(!token){
//         return res.json({msg:"Token not found"});
//     }
//     try{
//         const ver = jwt.verify(token, secret);
//         console.log("token = ",ver);
//         console.log("name = ",req.body.value);
//         if(ver.name === req.body.value){
//             res.json({msg:"User Found"})
//         }
//         else{
//             res.json({msg:"User Not found"})
//         }
//     }catch(err){
//         console.log("Error occured in the token");
//         res.json({ msg: "Token verification failed" });
//     }
// })


server.listen(8000, () => {
    console.log('Server is running on http://localhost:8000');
});
