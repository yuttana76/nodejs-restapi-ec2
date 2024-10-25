const express = require("express");
const {
  createUser,
  updateUser,
  deleteUser,
  getUser,
  getUsers
} = require("../controllers/user");


const router = express.Router();

router.get("/products", (req, res)=>{
  res.status(200).json({
    message : 'Your product list'
  })
});


// // create a user
// router.post("/", createUser);

// // get all users
// router.get("/", getUsers);


// // get a user
// router.get("/:id", getUser);

// // update a user
// router.put("/:id", updateUser);

// // delete a user
// router.delete("/:id", deleteUser);

module.exports = router;