const Vaga = require('../models/vaga');

// Criar uma nova vaga
exports.criarVaga = async (req, res) => {
  try {
    const vaga = await Vaga.create(req.body);
    res.status(201).json(vaga);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar vaga' });
  }
};

// Listar todas as vagas
exports.listarVagas = async (req, res) => {
  try {
    const vagas = await Vaga.findAll({ attributes: ['id', 'titulo'] });
    res.status(200).json(vagas);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar vagas' });
  }
};

// Buscar detalhes de uma vaga
exports.detalhesVaga = async (req, res) => {
  try {
    const vaga = await Vaga.findByPk(req.params.id);
    if (!vaga) return res.status(404).json({ error: 'Vaga não encontrada' });
    res.status(200).json(vaga);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar detalhes da vaga' });
  }
};

// Atualizar uma vaga
exports.atualizarVaga = async (req, res) => {
  try {
    const vaga = await Vaga.findByPk(req.params.id);
    if (!vaga) return res.status(404).json({ error: 'Vaga não encontrada' });

    await vaga.update(req.body);
    res.status(200).json(vaga);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar vaga' });
  }
};

// Deletar uma vaga
exports.deletarVaga = async (req, res) => {
  try {
    const vaga = await Vaga.findByPk(req.params.id);
    if (!vaga) return res.status(404).json({ error: 'Vaga não encontrada' });

    await vaga.destroy();
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar vaga' });
  }
};
