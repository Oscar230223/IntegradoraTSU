//Se declara el tipo de dato que va a tener 
const mongoose = require('mongoose');

const RFIDSchema = mongoose.Schema({
    NombreNino: {
        type: String,
        required: false
    },
    Salon: {
        type: String,
        required: false
    },
    NombrePadre: {
        type: String,
        required: false
    },
    NombreMama: {
        type: String,
        required: false
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    },
    NumeroT: {
        type: Number,
        required: false
    },
    NombrePExterna: {
        type: String,
        required: false
    },
    Estado: {
        type: String,
        required: false
    },
    CURP: {
        type: String,
        required: true
    },
    uid: {
        type: String,
        required: false
    },
    estado: {
        type: String,
        required: false
    },
    hora_entrada: {
        type: String,
        required: false
    },
    hora_salida: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('RFID', RFIDSchema);