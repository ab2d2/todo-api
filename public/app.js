$(document).ready(() => {
  $.getJSON('/api/todos')
    .then(addTodosToPage);

  $('#add-todo').keypress((event) => {
    if(event.which == 13) {
      createNewTodo();
      $('#add-todo').val('');
    }
  })
});

function addTodosToPage(todosData) {
  todosData.forEach((todo) => {
    addTodo(todo);
  });
}

function addTodo(todo) {
    let newTodo =
    $('<li class="ui-state-default">' +
        '<div class="checkbox">' +
            '<label>' +
                  '<input type="checkbox" value="" />' + todo.name +
            '</label>' +
        '</div>' +
      '</li>');
    $('.list').append(newTodo);
}

function createNewTodo() {
  let userInput = $('#add-todo').val();
  $.post('api/todos', {name: userInput})
    .then((newTodo) => {
      addTodo(newTodo);
    })
}
