const express = require('express')
const connectToDB = require('./connectDB');


const app = express();

//MiddleWare
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//DataBase Connect
connectToDB(process.env.MONGODB ?? "mongodb://127.0.0.1:27017/MedicalAppDataBase").then(() =>
{
    console.log("DB connected")
})


//Local Port
const PORT = 5000;
app.listen(PORT, ()=>console.log("Server Running at LocalHost 5K"));