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
    console.log("Socket.io client connected:", socket.id);

    // Receive message from client
    socket.on("client-message", (message) => {
        console.log("Message from client:", message);

        // Ensure message is sent as an array or in the expected format
        // Here we're emitting the message as an array to ensure compatibility
        io.emit("message", message); // Wrap in an array if it's not one
    });

    // Handle client disconnection
    socket.on("disconnect", () => {
        console.log("Socket.io client disconnected:", socket.id);
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
    handleLoginUserWithId,
    handleDoctorAllProfileData,
    handleDoctorIdentificationInfo,
} = require("./controllers/doctor");
// DB Module imports for Patients

const {
    handlePatientBasic,
    handlePatientIdentification,
    handlePatientLoginCredentials,
    handlePatientMedicalInformation,
    handlePatientPersonalInformation,
    handleAllPatientProfileData,
    handleLoginPatientUser,
} = require("./controllers/patient")

// offline patient registration

const {handleOfflinePatientEntry, handleAllDataOfOneDoctorOfOfflinePatient} = require("./controllers/OfflinePatient");
// Online Patient function 
const {handleOnlineAppointment,handleAllDataOfOneDoctorOnlineAppointment, handleAllOnlineAppointment} = require("./controllers/onlineApointment");

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
        const token = req.cookies.userCookie;
        let varifyData = jwt.verify(token, process.env.JWT_SECRET);
        const data = varifyData.UserId;
        console.log(data);

        const result = await handleDoctorBasicInfo(data, fullName, phone, dateOfBirth, gender);
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
        const Id = result._id;
        const UId = Id.toString();
        const token = jwt.sign({
            UserId: UId
        },process.env.JWT_SECRET);
        res.cookie("userCookie", token) 
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
        const token = req.cookies.userCookie;
        let varifyData = jwt.verify(token, process.env.JWT_SECRET);
        const data = varifyData.UserId;
        console.log(data);
        const result = await handleDoctorProfessionalInfo(data, medicalLicenseNumber, specialization, yearsOfExperience, medicalSchool, hospitalOrClinic);
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
        const token = req.cookies.userCookie;
        let varifyData = jwt.verify(token, process.env.JWT_SECRET);
        const data = varifyData.UserId;
        console.log(data);
        const result = await handleDoctorAgreementInfo(data, termsAndServices, privacyAndPolicy, consentOfDataSharing);
        res.json({ msg: "Data Sent", result });
    } catch (err) {
        console.error("Error Occured while post of Agreement = ", err);
        res.status(500).json({ msg: "Error Occured", error: err.message });
    }
});

app.post('/api/user/doctor/',async(req,res)=>{
    try {
        const {proofOfMedicalLicense, proofOfIdentity, Certifications} = req.body;
        console.log(proofOfMedicalLicense, proofOfIdentity, Certifications);
        const token = req.cookies.userCookie;
        let varifyData = jwt.verify(token, process.env.JWT_SECRET);
        const data = varifyData.UserId;
        console.log(data);
        const result = await handleDoctorIdentificationInfo(data, proofOfMedicalLicense, proofOfIdentity, Certifications);
        res.json({ msg: "Data Sent", result });

    } catch (error) {
        console.log("Error while getting indentification infomation = ", error);
    }
})

// Doctor Login verification
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
                UserId: UId
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

// API call for All Doctor data for Profile

app.get("/api/user/doctor/all-profile-data", async(req,res)=>{
    try {
        const token = req.cookies.userCookie;
        let varifyData = jwt.verify(token, process.env.JWT_SECRET);
        const data = varifyData.UserId;
        console.log(data);
        const result = await handleDoctorAllProfileData(data);
        res.json({ProfileData:result})
    } catch (error) {
        console.log("Error while getting all data of doctor ",error);
    }
})

app.post('/api/user/patient/basicInfo', async (req, res) => {
    try {
        const { fullName, phone, dateOfBirth, gender } = req.body;
        console.log(fullName, phone, dateOfBirth, gender);
        // console.log(req.cookies.userCookie)
        const token = req.cookies.userCookie;
        let varifyData = jwt.verify(token, process.env.JWT_SECRET);
        const data = varifyData.UserId;
        console.log(data);


        const result = await handlePatientBasic(data, fullName, phone, dateOfBirth, gender);
        console.log(result);

        res.json({ msg: "Data sent", result });
    } catch (error) {
        console.log("Error occured while saving basic info of patient: ", error);
        res.status(500).json({ msg: "Error Occured", error: error.message });
    }
});

app.post('/api/user/patient/personalInformation', async(req,res)=>{
    try {
        const userData = req.body;
        const {martialStatus,occupation,languagePreference} = req.body;
        console.log(userData);
        const token = req.cookies.userCookie;
        let varifyData = jwt.verify(token, process.env.JWT_SECRET);
        const data = varifyData.UserId;
        console.log("Data = ",data);
        
        const result = await handlePatientPersonalInformation(data,martialStatus,occupation,languagePreference);
        console.log(result);
        res.json({ msg: "Data sent", result });
        
    } catch (error) {
        
    }
})
app.post('/api/user/patient/medicalInfo', async (req, res) => {
    try {
        const { currentMedications, knowAllergies, medicalHistory, pastSurgeries, familyMedicalHistory } = req.body;
        console.log( currentMedications, knowAllergies, medicalHistory,pastSurgeries, familyMedicalHistory );
        const token = req.cookies.userCookie;
        let varifyData = jwt.verify(token, process.env.JWT_SECRET);
        const data = varifyData.UserId;
        console.log("Data = ",data);

        const result = await handlePatientMedicalInformation(data, currentMedications, knowAllergies, medicalHistory,pastSurgeries, familyMedicalHistory);
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
        const token = req.cookies.userCookie;
        let varifyData = jwt.verify(token, process.env.JWT_SECRET);
        const data = varifyData.UserId;
        console.log("Data = ",data);

        const result = await handlePatientIdentification(data, governmentIssuedId, adharNumber);
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
        // console.log("cokkie = ",req.cookies)                    
        const result = await handlePatientLoginCredentials(username, email, password);
        console.log(result);
        const Id = result._id;
        const UId = Id.toString();
        const token = jwt.sign({
            UserId: UId
        },process.env.JWT_SECRET);
        res.cookie("userCookie", token) 

        res.json({ msg: "Data sent", result });
    } catch (error) {
        console.log("Error occured while saving login info of patient: ", error);
        res.status(500).json({ msg: "Error Occured", error: error.message });
    }
});

// Login verification for Patient

app.post("/api/user/patient/login-credentials", async(req,res)=>{
    try{
        const logCred = req.body;
        console.log("logCred = ",logCred);
        const result = await handleLoginPatientUser(logCred)
        console.log("Server Result = ",result);
        const Id = result._id;
        const UId = Id.toString();
        console.log("User Id = ",Id.toString());
        if(result.username===logCred.userName){
            const token = jwt.sign({
                UserId: UId
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
})

// Offline Patient Form Registeration through App API Calls

app.post("/api/user/doctor/offline-registeration-form",async(req,res)=>{
    // console.log(req.body);
    // console.log(req.cookies.userCookie);
    const token = req.cookies.userCookie;
    if(!token){
        res.json({msg:"Token Not Found"});
    }else{
        res.json({msg:"Data Sent"})
    }
    try{
        let varifyData = jwt.verify(token, process.env.JWT_SECRET);
        varifyData.doctorId = varifyData.UserId;
        const Id = varifyData.UserId;
        const resultForId = await handleLoginUserWithId(Id);
        console.log("Result = ",resultForId);
        userDataObj = {
            doctorName:resultForId.userName,
            doctorOtherInformation:resultForId.email,
        }
        console.log("vairy daa = ", varifyData);
        const formData = req.body;
        let combo = {...varifyData,...userDataObj,...formData}
        console.log(combo);
        // console.log("Hi")
        const result = await handleOfflinePatientEntry(combo);
        // console.log("hello")
        console.log(result);
    } catch(err){
        console.log("error occured = ", err)
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

// Online Appointment data from frontend
app.post("/api/user/docotor-create-online-appointment", async(req,res)=>{
    try{
        const token = req.cookies.userCookie;
        if(!token){
            res.json({msg:"Token Not Found"});
        }else{
            res.json({msg:"Data Sent"})
        }
        let varifyData = jwt.verify(token, process.env.JWT_SECRET);
        varifyData.doctorId = varifyData.UserId;
        const Id = varifyData.UserId;
        const resultForId = await handleLoginUserWithId(Id);
        console.log("Result = ",resultForId);
        userDataObj = {
            doctorName:resultForId.userName,
            doctorOtherInformation:resultForId.email,
        }
        console.log("vairy daa = ", varifyData);
        const formData = req.body;
        let combo = {...varifyData,...userDataObj,...formData}
        console.log(combo);
        const result = await handleOnlineAppointment(combo);
        console.log("Result = ", result)
    } catch(err){
        console.log("Error occured = ",err);
    }
})

// syntatic data
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

// Get API calls for Card data of offline patient apointment data card
app.get("/api/user/patient-show/", async(req, res)=>{
    const token = req.cookies.userCookie;
    if(!token){
        return res.json({msg:"Token Not Found"});
    }
    let varifyData = jwt.verify(token, process.env.JWT_SECRET);
    // console.log("vairy daa = ", varifyData);

    const result = await handleAllDataOfOneDoctorOfOfflinePatient(varifyData.UserId)
    // console.log("THIS  = ",result);
    console.log("GOOOOOOOOOOOD");
    res.json({data:result});
})

//  API call for data request for online appointment data card.

app.get("/api/user/appointment-show/", async(req,res)=>{
    try{
        const token = req.cookies.userCookie;
        if(!token){
            return res.json({msg:"Token Not Found"});
        }
        const varifyData = jwt.verify(token, process.env.JWT_SECRET);

        const result = await handleAllDataOfOneDoctorOnlineAppointment(varifyData.UserId);
        res.json({data:result});
    }catch(err){
        console.log("Error while getting info of online appointment = ",err);
    }
})

// Api call for common area data card
app.get("/api/user/all-appointment-data", async(req,res)=>{
    try{
        const result = await handleAllOnlineAppointment();
        console.log("All data - ", result)
        res.json({result:result})
    } catch(err){
        console.log("Error with getting all appointment data = ",err)
    }
})

// API call for getting all profile data 
app.get("/api/user/patient/all-profile-data", async(req,res)=>{
    console.log(req.body)
    const token = req.cookies.userCookie;
        let varifyData = jwt.verify(token, process.env.JWT_SECRET);
        const data = varifyData.UserId;
        console.log("Id = ",data);
        const result = await handleAllPatientProfileData(data);
    res.json({PatientData:"no"});
})
server.listen(8000, () => {
    console.log('Server is running on http://localhost:8000');
});
