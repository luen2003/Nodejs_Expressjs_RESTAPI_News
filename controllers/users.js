const User = require("../models/models.js");
let id_ = 0 ;
let users = [];
const userController =  {
   createUser : async  (req, res) => {
    try {
        const newUser = new User(req.body);
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
      } catch (err) {
        res.status(500).json(err); 
      }

    
},

 getUsers: async (req, res) => {   
    try {
        const allUser = await User.find();
        res.status(200).json(allUser);
      } catch (err) {
        res.status(500).json(err);
      }
},

 getUser : async (req, res) => {
    try {
        const currentUser = await User.findById(req.params.id);
        res.status(200).json(currentUser);
      } catch (err) {
        res.status(500).json(err);
      }
},

 deleteUser : async (req, res) => { 
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("Deleted successfully!");
      } catch (err) {
        res.status(500).json(err);
      }
},


 updateUser :  async (req,res) => {
    try {
        const updateUser = await User.findById(req.params.id);
        await updateUser.updateOne({ $set: req.body }, {new : true});
        res.status(200).json("Updated successfully!");
      } catch (err) {
        res.status(500).json(err);
      }
}
};
module.exports = userController;



