//Se mandan los datos a la base de datos
const RFIDModel = require("../models/RFID");

exports.crearRFID = async (req, res) => {
    try {
        let nuevoRFID;

        // Creamos nuestro RFID (se registra niño)
        nuevoRFID = new RFIDModel(req.body);

        await nuevoRFID.save();
        res.send(nuevoRFID);
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}

exports.obtenerRFID = async (req, res) => {
    try {
        const RFIDList = await RFIDModel.find();
        res.json(RFIDList);
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}

exports.obtenerRFIDPorId = async (req, res) => {
    try {
        const rfidId = req.params.id;

        // Buscar el RFID por su ID
        const rfid = await RFIDModel.findById(rfidId);

        if (!rfid) {
            return res.status(404).json({ message: "RFID no encontrado" });
        }

        res.json(rfid);
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}

exports.borrarRFIDPorId = async (req, res) => {
    try {
        const rfidId = req.params.id;

        // Buscar el RFID por su ID y eliminarlo
        const deletedRFID = await RFIDModel.findByIdAndDelete(rfidId);

        if (!deletedRFID) {
            return res.status(404).json({ message: "RFID no encontrado" });
        }

        res.json({ message: "RFID eliminado correctamente" });
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}

exports.actualizarRFID = async (req, res) => {
    try {
        const rfidId = req.params.id;
        
        // Buscar el RFID por su ID y actualizar los campos
        const updatedRFID = await RFIDModel.findByIdAndUpdate(
            rfidId,
            req.body,
            { new: true }
        );

        if (!updatedRFID) {
            return res.status(404).json({ message: "RFID no encontrado" });
        }

        res.json(updatedRFID);
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}

exports.obtenerNiños = async (req, res) => {
    try {
        const CURP = req.params.Tel;

        // Buscar el RFID por su ID
        const curp = await RFIDModel.findOne({CURP:CURP});

        if (!curp) {
            return res.status(404).json({ message: "RFID no encontrado" });
        }

        res.json(curp);
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}

exports.obtenerNiño = async (req, res) => {
    try {
        const CURP = req.params.curp;
        let kid = await RFIDModel.findOne({CURP:CURP});
        if (!kid) {
            return res.status(404).json({ message: "RFID no encontrado" });
        }
        res.json(kid);
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}