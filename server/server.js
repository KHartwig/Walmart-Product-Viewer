const express = require('express');
const app = express();
const cors = require('cors');
const config = require('./config');

const categoriesRouter = require('./_resources/categories/categories.router');
const productsRouter = require('./_resources/products/products.router');
const errorHandler = require('./_helpers/errorHandler');

app.use(cors());

app.use('/categories', categoriesRouter);
app.use('/products', productsRouter);

app.use('', errorHandler);

app.listen(config.port, () => {
  console.log('listening on port ' + config.port);
});
