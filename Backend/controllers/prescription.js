const {Prescription} = require("../models/Prescription");

async function handlePreciptionInfo(data) {
    try {
        const result = await Prescription.create(data)
        console.log("Preciption result = ",result)
    } catch (error) {
        console.log("Error while storing prescription data ",error);
    }

}

async function handlePreciptionUpdate(appoinment,medication,diagnosis,instructions) {
    try {
        const result = await Prescription.updateOne(
            { appoinmentId: appoinment },  // Assuming id is an ObjectId, no need for `${id}`
            { $set: { medication: medication },
            $set: { diagnosis: diagnosis },
            $set: { instructions: instructions },}
        ).exec();
        console.log("Update preciitp rsult= ",result)
    } catch (error) {
        console.log("Error occured while updating the precription = ",error);
    }
}

async function handleShowAllPrescriptionByDoctorId(id) {
    try {
        const result = await Prescription.find({doctorId:id});
        // console.log("Result of All Pres = ",result)
        return result
    } catch (error) {
        console.log("Error while getting all prescription ",error);
    }
    
}

async function handleShowAllPrescriptionAppointmentId(id) {
    try {
        const result = await Prescription.find({appointmentId:id});
        console.log("Result of All Pres = ",result)
        return result
    } catch (error) {
        console.log("Error while getting all prescription ",error);
    }
}


module.exports = {handlePreciptionInfo,
    handlePreciptionUpdate,
    handleShowAllPrescriptionAppointmentId,
    handleShowAllPrescriptionByDoctorId,
}