// participanteRoutes.js
const express = require('express');
const router = express.Router();
const participanteController = require('../controllers/participanteController');

router.get('/', participanteController.getAllParticipantes);
router.get('/:idparticipante', participanteController.getParticipanteById);
router.post('/', participanteController.createParticipante);
router.delete('/:idparticipante', participanteController.deleteParticipante);
router.put('/:idparticipante', participanteController.updateParticipante);


module.exports = router;
