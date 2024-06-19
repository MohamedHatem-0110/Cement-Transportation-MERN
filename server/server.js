require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const logger = require("./middleware/logger");
const cors = require("cors");
const app = express();

app.use(express.json());
// Use the logger middleware for all routes
app.use(logger);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

// Use the user routes
app.use(cors("/api", userRoutes));

// Define a port
const port = 3000;

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
