const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://anujtiwari9111:anuj9111@cluster0.xixhaf3.mongodb.net/Newuser")

const User = mongoose.model('Users', {
  name: String, 
  email: String,
  password: String
});

app.post('/signup', async function(req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;

  const existingUser = await User.findOne({ email: username });
  // CRUD => Create Read Update Delete
  if(existingUser) {
    return res.status(400).send("Username already exists");
  }
  
  const user = new User({
    name: name,
    email: username,
    password: password
  });

  user.save();
  res.json({
    "msg": "User created successfully"
  });
  
});