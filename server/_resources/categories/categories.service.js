const config = require('../../config');
const axios = require('axios');

module.exports = {
  getAll,
  getPaginatedItems
};


async function getAll() {
  const url = `${config.walmartApiUrl}/taxonomy?format=json&apiKey=${config.walmartDevApiKey}`;
  console.log('GET categories from ' + url);
  const response = await axios.get(url);
  console.log('Response: ', response);
  if (response.data){
    return response.data.categories;
  }
  else {
    throw { status: 404, message: 'Resource not Found', name: 'Internal' };
  }
}

async function getPaginatedItems(categoryId, itemsPerPage, maxId) {
  const url = `${config.walmartApiUrl}/paginated/items?category=${categoryId}`
              + (maxId ? `&maxId=${maxId}` : ``)
              + (itemsPerPage ? `&count=${itemsPerPage}` : ``)
              + `&format=json&apiKey=${config.walmartDevApiKey}`;
  console.log('GET categories from ' + url);
  const response = await axios.get(url);
  if (response.data && response.data.category){
    // Modify nextPage to call this API instead of walmart one
    const nextPage = new URL('http://api.walmartlabs.com' + response.data.nextPage);
    response.data.nextPage = `/categories/${response.data.category}?maxId=${nextPage.searchParams.get('maxId')}`;
    return response.data;
  }
  else {
    throw { status: 404, message: 'Category not Found', name: 'Internal' };
  }
}

function PaginatedResponseFilter(data) {
  return {
    category: data.category,
    format: data.format,
    items: data.items,
    nextPage: data.nextPage
  }
}
