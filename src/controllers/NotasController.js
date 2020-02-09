
const NotasService = require('../services/NotasService');

module.exports = {
    index:    NotasService.index,
    create:   NotasService.create,
    update:   NotasService.update,
    delete:   NotasService.delete,
    findById: NotasService.findById,
}