
const express = require("express");
const bodyParser = require("body-parser");
const usersRoutes =  require("./routes/users.js");
const fileURLToPath =require('url');
const dirname =require ('path');
const mongoose = require("mongoose");



const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(express.static(__dirname));
mongoose
  .connect('mongodb+srv://userapi:userapi123@clusteruser.kydclaj.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));


app.use("/users", usersRoutes);
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
    console.log(__dirname);
});
app.all("*", (req, res) =>res.send("You've tried reaching a route that doesn't exist."));

app.listen(PORT, () =>console.log(`Server running on port: http://localhost:${PORT}`));



    