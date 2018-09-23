let db = require("../models");

exports.getTodos = (request, response) => {
   db.Todo.find()
    .then((todos) => {
      response.json(todos);
    })
    .catch((error) => {
      response.send(error);
    });
};

exports.createTodo = (request, response) => {
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
};

exports.getTodoById = (request, response) => {
   db.Todo.findById(request.params.todoId)
    .then((foundTodo) => {
      response.json(foundTodo);
    })
    .catch((error) => {
      response.send(error);
    });
};

exports.updateTodo = (request, response) => {
   db.Todo.findOneAndUpdate({_id: request.params.todoId}, request.body, {new: true})
    .then((updatedTodo) => {
      response.json(updatedTodo);
    })
    .catch((error) => {
      response.send(error);
    });
};

exports.deleteTodo = (request, response) => {
   db.Todo.remove({_id: request.params.todoId})
    .then((updatedTodo) => {
      response.json("Deleted item");
    })
    .catch((error) => {
      response.send(error);
    });
};

module.exports = exports;
