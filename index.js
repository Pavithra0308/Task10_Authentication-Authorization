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
app.get("/", (req, res) => {
  res.send("🛡️ User Authentication & Authorization using Bearer Token!");
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
