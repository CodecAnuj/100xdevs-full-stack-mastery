const mongoose = require("mongoose");

// right way to do .env
mongoose.connect(
  "mongodb+srv://anujtiwari9111:anuj9111@cluster0.xixhaf3.mongodb.net/todos"
);

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: {
    type: Boolean,
    default: false,
  },
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
  todo,
};
