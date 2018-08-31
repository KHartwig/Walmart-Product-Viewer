const path = require('path');
const express = require('express');
const api = express();
const app = express();
const cors = require('cors');
const config = require('./config');

// API Routers
const categoriesRouter = require('./_resources/categories/categories.router');
const productsRouter = require('./_resources/products/products.router');
const errorHandler = require('./_helpers/errorHandler');

// _____ API APP
api.use(cors());

api.use('/categories', categoriesRouter);
api.use('/products', productsRouter);

api.use('', errorHandler);

// _____ MAIN APP
const distPath = path.join(__dirname, '../dist/Walmart-Product-Viewer');

app.use('/api', api);
app.use(express.static(distPath));

app.get('*', function (req, res) {
  res.sendFile(distPath + '/index.html');
});

// _____ APP LISTEN
app.listen(config.port, () => {
  console.log('listening on port ' + config.port);
});

