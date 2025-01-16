const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const connectDB = require("./config/db.js");
const PORT = process.env.PORT || 4000;

connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.status(200).json({
    message: "Api is running",
    status: true,
  });
});


app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});