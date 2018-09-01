const Sequelize = require('sequelize');
const connection = require('./index.js');

const List = connection.define(
  'list',
  {
    name: {
      type: Sequelize.STRING(50),
      allowNull: false
    }
  },
  { timestamps: false }
);

const Todo = connection.define(
  'todo',
  {
    name: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    list_name: {
      type: Sequelize.STRING(50),
      allowNull: false
    }
  },
  { timestamps: false }
);

connection.sync({ force: false });

module.exports = {
  List,
  Todo
};
