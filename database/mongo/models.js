const mongoose = require('mongoose');
const db = require('./index.js');

const listSchema = mongoose.Schema({
  name: { type: String, require: true }
});

const List = mongoose.model('List', listSchema);

const todoSchema = mongoose.Schema({
  name: { type: String, require: true },
  list_name: { type: String, require: true }
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = { List, Todo };
