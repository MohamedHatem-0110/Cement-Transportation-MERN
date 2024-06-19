// routes/userRoutes.js
const express = require("express");
const { getAllTrucks, createTruck } = require("../controller/TruckController");
const {
  createClient,
  getAllClients,
} = require("../controller/clientsController");
const {
  createTrip,
  getAllTrips,
  createTransaction,
} = require("../controller/tripsController");
const router = express.Router();

// Define routes

router.get("/trucks", getAllTrucks);
router.post("/createtruck", createTruck);

router.post("/client", createClient);
router.get("/client", getAllClients);

router.post("/trip", createTrip);
router.get("/trip", getAllTrips);

router.post("/transaction", createTransaction);

// router.get("/users/:id", getUserById);

module.exports = router;
