const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const { TodoModel } = require('./TodoModel');
const Mangoose = require('mongoose');
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app(bodyParser.urlencoded({ extended: true })); 
app.use (cors());

app.get("/", (req, res) => {
    TodoModel.find({})
    .then(todoList => res.status(200).json(todoList))
    .catch((e)=> res.status(500).json(e)); 
});

app.post("/todo", (req, res) => {
    const todo = new TodoModel ({
        ... req.body,
        created_at: new Date(),
    });

    todo
        .save()
        .then((savedTodo) => res.status(200). json(savedTodo))
        .catch((e) => res.status(500).json(e));
});

app.listen(PORT, async () => {
    console.log('Server is running on port', PORT);
    await Mangoose.connect('mongodb://mongo-alias:27017/todos', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log('MongoDB is connected');
});