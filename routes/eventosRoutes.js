// eventoRoutes.js
const express = require('express');
const router = express.Router();
const eventoController = require('../controllers/eventoController');

router.get('/', eventoController.getAllEventos);
router.get('/grafica', eventoController.getDataGraficaEventos);

module.exports = router;
