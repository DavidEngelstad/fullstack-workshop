// const { List, Todo } = require('../database/mongo/models.js');
const { List, Todo } = require('../database/sql/models.js');

// MONGOOSE CONTROLLER --------------------------------------
// module.exports = {
//   fetch: (req, res) => {
//     console.log('In GET...');
//     const { listName } = req.query;
//     Todo.find({
//       list_name: listName
//     })
//       .then(todos => {
//         res.status(200).send(todos);
//       })
//       .catch(err => {
//         console.log('Error', err);
//       });
//   },
//   post: (req, res) => {
//     console.log('In POST...');
//     const { listName, todo } = req.body;
//     new Todo({
//       name: todo,
//       list_name: listName
//     })
//       .save()
//       .then(data => {
//         res.status(201).send(data);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   },
//   delete: (req, res) => {
//     console.log('In DELETE...');
//     const { todo } = req.query;
//     Todo.deleteOne({
//       name: todo
//     })
//       .then(deleted => {
//         res.status(202).send(deleted);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   }
// };
//SEQUELIZE CONTROLLER -------------------------------------

module.exports = {
  fetch: (req, res) => {
    console.log('In GET...');
    const { listName } = req.query;
    Todo.findAll({
      where: {
        list_name: listName
      }
    })
      .then(todos => {
        if (todos) {
          res.status(200).send(todos);
        } else {
          res.status(404).send('List not found');
        }
      })
      .catch(err => res.status(404).send(err));
  },
  post: (req, res) => {
    console.log('In POST');
    const { todo, listName } = req.query;
    Todo.create({
      name: todo,
      list_name: listName
    })
      .then(todo => {
        res.status(201).send(todo);
      })
      .catch(err => {
        res.status(404).send(err);
      });
  },
  delete: (req, res) => {
    console.log('In DELETE...');
    const { todo } = req.query;
    Todo.destroy({
      where: { name: todo }
    })
      .then(() => {
        res.status(202).send('Todo deleted');
      })
      .catch(err => {
        res.status(404).send(err);
      });
  }
};
