const Nota = require('../models/notaModel');

exports.getAll = async () => {
  return await Nota.find();
};

exports.create = async (data) => {
  const nota = new Nota(data);
  return await nota.save();
};

exports.getById = async (id) => {
  return await Nota.findById(id);
};

exports.update = async (id, data) => {
  return await Nota.findByIdAndUpdate(id, data, { new: true });
};

exports.delete = async (id) => {
  return await Nota.findByIdAndDelete(id);
};
