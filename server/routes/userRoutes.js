// routes/userRoutes.js
const express = require("express");
const {
  getAllTrucks,
  createTruck,
  getTruckById,
} = require("../controller/TruckController");
const {
  createClient,
  getAllClients,
} = require("../controller/clientsController");
const {
  createTrip,
  getAllTrips,
  createTransaction,
  gettripsbytruckid,
} = require("../controller/tripsController");
const router = express.Router();

// Define routes

router.get("/trucks", getAllTrucks);
router.post("/createtruck", createTruck);

router.post("/client", createClient);
router.get("/client", getAllClients);
router.get("/trucks", getAllTrucks);
router.get("/trucks/:truckId", getTruckById);
router.post("/createtruck", createTruck);

router.post("/trip", createTrip);
router.get("/trip", getAllTrips);
router.get("/trips/:truckId", gettripsbytruckid);

router.post("/transaction", createTransaction);

// router.get("/users/:id", getUserById);

module.exports = router;
