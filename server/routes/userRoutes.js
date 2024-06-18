// routes/userRoutes.js
const express = require("express");
const { getAllUsers } = require("../controller/userController");
const router = express.Router();

// Define routes
router.get("/users", getAllUsers);
// router.get("/users/:id", getUserById);

module.exports = router;
