const express = require('express');
const vagaController = require('../controllers/vagaController');
const router = express.Router();

router.post('/vagas', vagaController.criarVaga);
router.get('/vagas', vagaController.listarVagas);
router.get('/vagas/:id', vagaController.detalhesVaga);
router.put('/vagas/:id', vagaController.atualizarVaga);
router.delete('/vagas/:id', vagaController.deletarVaga);

module.exports = router;
