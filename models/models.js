const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  title: {
    type: String,
    required:true
  },
  subtitle: {
    type: String,
    required:true
},
  link : {
    type: String,
  },
});
module.exports = mongoose.model("User", userSchema);