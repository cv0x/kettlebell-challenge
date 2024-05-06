const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const {mongoose} = require("mongoose");

// Mongodb connection
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

const app = express();

app.use("/", require("./routes/authRoutes"));

const port = 8000;
app.listen(port, () => console.log(`Server running on port ${port} 🔥`));
