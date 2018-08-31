const express = require('express');
const app = express();
const cors = require('cors');
const request = require('request');
const config = require('./config');

app.use(cors());

app.get('', (req, res) => {
  console.log('hello');
  res.send('hi');
});

app.get('/api/categories', (req, res) => {
  const url = `${config.walmartApiUrl}/taxonomy?format=json&apiKey=${config.walmartDevApiKey}`;
  console.log('GET categories from ' + url);
  request(url,
    (error, response, body) => {
      if (error) {
        console.log('ERROR', error);
        res.send('500');
      }
      else {
        res.send(body);
      }
    });
});

app.get('/api/categories/:id', (req, res) => {
  const url = `${config.walmartApiUrl}/paginated/items?category=${req.params.id}&count=100&format=json&apiKey=${config.walmartDevApiKey}`;
  console.log('GET categories from ' + url);
  request(url,
    (error, response, body) => {
      if (error) {
        console.log('ERROR', error);
        res.send('500');
      }
      else {
        console.log('success! ', body);
        res.send(body);
      }
    });
});

app.get('/api/products', (req, res) => {
  console.log('GET products');
  res.send('hello');
});

app.listen(config.port, () => {
  console.log('listening on port ' + config.port);
});
