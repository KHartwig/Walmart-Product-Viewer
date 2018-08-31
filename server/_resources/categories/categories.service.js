const config = require('../../config');
const axios = require('axios');

module.exports = {
  getAll,
  getPaginatedItems
};

// Cache to give more detail on categories when paginating them
let categoriesCache;

async function getAll() {
  const url = `${config.walmartApiUrl}/taxonomy?format=json&apiKey=${config.walmartDevApiKey}`;
  const response = await axios.get(url);

  // Handle Data
  if (response.data){
    categoriesCache = response.data.categories;
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
  const response = await axios.get(url);

  // Handle Data
  if (response.data && response.data.category){
    // Modify nextPage to call this API instead of walmart one
    const nextPage = new URL('http://api.walmartlabs.com' + response.data.nextPage);
    response.data.nextPage = `/categories/${response.data.category}?maxId=${nextPage.searchParams.get('maxId')}`;

    // Modify category to include name and sub categories
    if (categoriesCache){
      response.data.category = categoriesCache.find(category => {
        return category.id === response.data.category;
      });
    }
    return response.data;
  }
  else {
    throw { status: 404, message: 'Category not Found', name: 'Internal' };
  }
}
