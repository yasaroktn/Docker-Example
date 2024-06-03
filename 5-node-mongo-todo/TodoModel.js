const Mongoose = require('mongoose');

const TodoSchema = new Mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
    created_at: Date,
});

moodule.exports = {
    TodoModel: Mongoose.model('Todo', TodoSchema),
};