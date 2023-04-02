
const router = require("express").Router();
const userController = require("../controllers/users");




router.get('/', userController.getUsers);

router.post('/', userController.createUser);

router.get('/:id', userController.getUser);

router.delete('/:id', userController.deleteUser);

router.patch('/:id', userController.updateUser);

module.exports = router;
