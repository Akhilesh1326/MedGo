const {onlineAppointmentSchema} = require("../models/OnlineAppointment");

async function handleOnlineAppointment(appointmentData) {
    try{

        const result = await onlineAppointmentSchema.create(appointmentData);
        console.log("Online data = ",result);
        return result;
    } catch(err){
        console.log("Error Occured  = ",err.message);
    }
}
async function handleAllDataOfOneDoctorOnlineAppointment(userId) {
    try{
        const result = await onlineAppointmentSchema.find({doctorId:userId});
        return result;
    }catch(err){
        console.log("Error in getting Online Appointment data = ",err);
    }
}

async function handleAllOnlineAppointment() {
    try{
        const result = await onlineAppointmentSchema.find();
        // console.log(result);
        return result;

    } catch(err){
        console.log("All online data error = ",err)
    }
}


module.exports = {handleOnlineAppointment, handleAllDataOfOneDoctorOnlineAppointment, handleAllOnlineAppointment}