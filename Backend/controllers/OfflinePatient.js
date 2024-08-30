const OfflinePatientSchema = require("../models/OfflinePatientData");

async function handleOfflinePatientEntry(userData) {
    try {
        // Create a new user document in the database with the provided data
        const result = await OfflinePatientSchema(userData);
        return result;
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
}


module.exports = {
    handleOfflinePatientEntry
};
