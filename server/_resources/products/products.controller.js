const productsService = require('./products.service');

module.exports = {
  getById
};

function getById(req, res, next) {
  productsService.getById(req.params.id)
    .then(product => res.send(product))
    .catch(err => next(err));
}
