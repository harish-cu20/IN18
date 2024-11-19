const express = require("express");
const cors = require("cors");
require("./db/config");
const User = require("./db/User");
const { parse } = require("dotenv");
const app = express();
app.use(express.json());
app.use(cors());

// add user
app.post("/user", async (req, resp) => {
  let user = new User(req.body);
  let result = await user.save();
  resp.send(result);
});

// user list
app.get("/users", async (req, resp) => {
  let users = await User.find();
  if (users.length > 0) {
    resp.send(users);
  } else {
    resp.send({ result: "No user found" });
  }
});
//delete user
app.delete("/users/:id", async (req, resp) => {
  const result = await User.deleteOne({ _id: req.params.id });
  resp.send(result);
});

//update
app.get("/user/:id", async (req, resp) => {
  let result = await User.findOne({ _id: req.params.id });
  if (result) {
    resp.send(result);
  } else {
    resp.send({ result: "No record found." });
  }
});
// update
app.put("/users/:id", async (req, resp) => {
  let result = await User.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  resp.send(result);
});
app.listen(5000);
