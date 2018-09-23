let express = require('express');
let router = express.Router();
let db = require("../models");

router.get('/', (request, response) => {
   db.Todo.find()
    .then((todos) => {
      response.json(todos);
    })
    .catch((error) => {
      response.send(error);
    });
});

router.post('/', (request, response) => {
  if(!request.body) {
    return response.sendStatus(400);
  }

  db.Todo.create(request.body)
    .then((newItem) => {
      response.status(201).json(newItem);
    })
    .catch((error) => {
      response.send(error);
    });
});

router.get('/:todoId', (request, response) => {
   db.Todo.findById(request.params.todoId)
    .then((foundTodo) => {
      response.json(foundTodo);
    })
    .catch((error) => {
      response.send(error);
    });
});

 module.exports = router;
