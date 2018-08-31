module.exports = errorHandler;

function errorHandler(err, req, res, next) {
  console.log('ERROR', err);
  if (err.response) {
    return res.status(err.response.status).json({ message: err.response.data });
  }
  if (err.name === 'Internal') {
    return res.status(err.status).json({ message: err.message });
  }
  return res.status(500).json({ message: 'Internal Server Error' });
}
