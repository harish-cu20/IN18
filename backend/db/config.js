const mongoose = require('mongoose');
mongoose.set('strictQuery', true); 

const uri = "mongodb://localhost:27017";

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log("Could not connect", err);
  });
