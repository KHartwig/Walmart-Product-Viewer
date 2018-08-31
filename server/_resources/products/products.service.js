const config = require('../../config');
const axios = require('axios');

module.exports = {
  getById
};

async function getById(id) {
  const url = `${config.walmartApiUrl}/items/${id}?format=json&apiKey=${config.walmartDevApiKey}`;
  const response = await axios.get(url);

  // Handle data
  if (response.data && response.data.itemId){
    return response.data;
  }
  else {
    throw { status: 404, message: 'Resource not Found', name: 'Internal' };
  }
}
