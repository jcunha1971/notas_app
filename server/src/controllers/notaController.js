const NotaRepository = require('../repositories/notaRepository');

exports.getAllNotas = async (req, res) => {
  try {
    const notas = await NotaRepository.getAll();
    res.status(200).json(notas);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.createNota = async (req, res) => {
  try {
    const novaNota = await NotaRepository.create(req.body);
    res.status(201).json(novaNota);
  } catch (error) {
    res.status(400).json({ error: 'Bad Request' });
  }
};

exports.getNotaById = async (req, res) => {
  try {
    const nota = await NotaRepository.getById(req.params.id);
    if (!nota) {
      return res.status(404).json({ error: 'Nota not found' });
    }
    res.status(200).json(nota);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.updateNota = async (req, res) => {
  try {
    const nota = await NotaRepository.update(req.params.id, req.body);
    if (!nota) {
      return res.status(404).json({ error: 'Nota not found' });
    }
    res.status(200).json(nota);
  } catch (error) {
    res.status(400).json({ error: 'Bad Request' });
  }
};

exports.deleteNota = async (req, res) => {
  try {
    const nota = await NotaRepository.delete(req.params.id);
    if (!nota) {
      return res.status(404).json({ error: 'Nota not found' });
    }
    res.status(200).json({ message: 'Nota deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
