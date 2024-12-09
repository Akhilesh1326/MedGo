const {
    PatientFillingForm
} = require("../models/DirectPatientForm")

async function handleFormFillingByPatient(allData) {
    try {
        const result = await PatientFillingForm.create(allData);
        console.log("Controller of by patient form = ",result);
        return result;
    } catch (error) {
        console.log("Error while storing by patient form filling data", error.messsage);
        return { message: "eroro form filling" }
    }
    
}

async function handleGetFormFillingByPatient() {
    try {
        const result = await PatientFillingForm.find();
        console.log("Controller of by patient form = ",result);
        return result;
    } catch (error) {
        console.log("Error while storing by patient form filling data", error.messsage);
        return { message: "eroro form filling" }
    }
}

module.exports={
    handleFormFillingByPatient,
    handleGetFormFillingByPatient,
}