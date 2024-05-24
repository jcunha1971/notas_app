const express = require('express');
const router = express.Router();
const notaController = require('../controllers/notaController');

router.get('/', notaController.getAllNotas);
router.post('/', notaController.createNota);
router.get('/:id', notaController.getNotaById);
router.put('/:id', notaController.updateNota);
router.delete('/:id', notaController.deleteNota);

module.exports = router;
