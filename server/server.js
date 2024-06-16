const express = require("express");
const userRoutes = require("./routes/userRoutes");
const logger = require("./middleware/logger");

const app = express();

// Use the logger middleware for all routes
app.use(logger);
// Use the user routes

app.use("/api", userRoutes);

// Define a port
const port = 3000;

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
