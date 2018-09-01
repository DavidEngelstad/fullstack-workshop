const express = require('express');
const parser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const routes = require('./routes.js');
const db = require('../database/mongo');
const PORT = 3000;

const app = express();

app.use(morgan('combined'));

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.use('/api', routes);

app.use(express.static(path.resolve(__dirname, '../static')));

app.listen(PORT, () => {
  console.log('App is listening on PORT:', PORT);
});
