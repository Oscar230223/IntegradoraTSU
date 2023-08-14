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
    }
});

module.exports = mongoose.model('RFID', RFIDSchema);