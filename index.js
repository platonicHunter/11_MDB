const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/product_route.js");
const app = express();

// Middleware to parse JSON requests
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// Routes
app.use("/api/products", productRoute);

// Basic route for testing the server
app.get("/", (req, res) => {
  res.send("hi");
});

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://admin:XX3liGKfTIt6mSiQ@db.ighaxue.mongodb.net/Node-API?retryWrites=true&w=majority&appName=DB"
  )
  .then(() => console.log("Database Connected!"))
  .catch((err) => console.log(err));
