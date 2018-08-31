const categoriesService = require('./categories.service');

module.exports = {
  getAll,
  getPaginatedItems
};

function getAll(req, res, next) {
  categoriesService.getAll()
    .then(categories => res.send(categories))
    .catch(err => next(err));
}

function getPaginatedItems(req, res, next) {
  categoriesService.getPaginatedItems(req.params.id, 100, req.query.maxId)
    .then(page => res.send(page))
    .catch(err => next(err));
}
