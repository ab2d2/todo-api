const express = require('express');
const  todoRoutes = require('./routes/todos');
const  bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api/todos', todoRoutes);

app.get('/', (request, response) => {
  response.send("Hello from the root");
})

app.listen(port, function() {
  console.log(`app is running on ${port}`)
});
