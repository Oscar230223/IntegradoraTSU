const mongoose = require('mongoose');

const RFIDSchema = mongoose.Schema({
    NombreNino: {
        type: String,
        required: true
    },
    Salon: {
        type: Number,
        required: true
    },
    NombrePadre: {
        type: String,
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    },
    NumeroT: {
        type: Number,
        required: true
    },
    NombrePExterna: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('RFID', RFIDSchema);