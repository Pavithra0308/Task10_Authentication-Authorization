require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
require("./db_config");
const authRoutes = require("./routes/authRoutes");

app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

app.use("/", authRoutes);
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
