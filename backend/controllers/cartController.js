const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define a schema for the tests
const testSchema = new Schema({
  testName: String,
  testResult: String,
});

// Define a schema for appointments
const appointmentSchema = new Schema({
  doctorId: { type: Schema.Types.ObjectId, ref: 'Doctor' }, // Reference to the doctor
  patientId: { type: Schema.Types.ObjectId, ref: 'Patient' }, // Reference to the patient
  appointmentDate: Date,
  tests: [testSchema], // Embed tests within the appointment
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
