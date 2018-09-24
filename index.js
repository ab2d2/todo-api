const express = require('express');
const  todoRoutes = require('./routes/todos');
const  bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api/todos', todoRoutes);

app.use(express.static(__dirname + '/public'))
app.use(express.static(__dirname + '/views'))

app.get('/', (request, response) => {
  response.sendFile("index.html");
})

app.listen(port, function() {
  console.log(`app is running on ${port}`)
});
