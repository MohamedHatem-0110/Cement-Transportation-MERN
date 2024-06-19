// routes/userRoutes.js
const express = require("express");
const { getAllTrucks, createTruck } = require("../controller/TruckController");
const router = express.Router();

// Define routes


router.get("/trucks",getAllTrucks);
router.post("/createtruck",createTruck);



// router.get("/users/:id", getUserById);

module.exports = router;
