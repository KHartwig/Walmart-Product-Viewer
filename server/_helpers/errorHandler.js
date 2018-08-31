module.exports = errorHandler;

function errorHandler(err, req, res, next) {
  console.log('ERROR', err);

  // HTTP call error (axios)
  if (err.response) {
    return res.status(err.response.status).json({ message: err.response.data });
  }
  // Internally thrown error
  if (err.name === 'Internal') {
    return res.status(err.status).json({ message: err.message });
  }
  // Otherwise respond with general 500 error
  return res.status(500).json({ message: 'Internal Server Error' });
}
