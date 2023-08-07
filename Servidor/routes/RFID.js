const express = require("express");
const router = express.Router();
const rfidController = require("../controllers/RFIDController"); // Asegúrate de importar tus controladores correctamente

// Ejemplo de definición de rutas
router.get("/", rfidController.obtenerRFID);
router.get("/:id", rfidController.obtenerRFIDPorId);
router.post("/", rfidController.crearRFID);
router.put("/:id", rfidController.actualizarRFID);
router.delete("/:id", rfidController.borrarRFIDPorId);

module.exports = router;
