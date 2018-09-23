let express = require('express');
let router = express.Router();
let db = require("../models");
let routingHelpers = require('../helpers/todos');

router.route('/')
  .get(routingHelpers.getTodos)
  .post(routingHelpers.createTodo);

router.route('/:todoId')
  .get(routingHelpers.getTodoById)
  .put(routingHelpers.updateTodo)
  .delete(routingHelpers.deleteTodo);

 module.exports = router;
