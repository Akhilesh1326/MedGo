const express = require('express');
const connectDB = require('./connectDB');
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require('cors');
const { Server } = require("socket.io");
const http = require("http");

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


// DB Module imports
const { 
    handleDoctorBasicInfo,
    handleDoctorAgreementInfo,
    handleDoctorLoginInfo,
    handleDoctorProfessionalInfo,
} = require("./controllers/doctor");


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
        const { medicalLicenseNumber, specialization, yearsOfExperience, medicalSchool, hospitalOrClinic} = req.body;
        console.log(medicalLicenseNumber, specialization, yearsOfExperience, medicalSchool, hospitalOrClinic);
        const result = await handleDoctorProfessionalInfo(medicalLicenseNumber, specialization, yearsOfExperience, medicalSchool, hospitalOrClinic);
        res.json({ msg: "Data Sent", result });
    } catch (err) {
        console.error("Error occured = ", err);
        res.status(500).json({ msg: "Error Occured", error: err.message });
    }
});

app.post('/api/user/doctor/agreementInfo', async(req, res) => {
    try {
        const { termsAndServices, privacyAndPolicy, consentOfDataSharing } = req.body;
        console.log(termsAndServices, privacyAndPolicy, consentOfDataSharing);
        const result = await handleDoctorAgreementInfo(termsAndServices, privacyAndPolicy, consentOfDataSharing);
        res.json({ msg: "Data Sent", result });
    } catch(err) {
        console.error("Error Occured while post of Agreement = ", err);
        res.status(500).json({ msg: "Error Occured", error: err.message });
    }
});

server.listen(8000, () => {
    console.log('Server is running on http://localhost:8000');
});
