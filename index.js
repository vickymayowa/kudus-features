const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const connectDB = require("./config/db.js");
const timelineRoutes = require('./routes/timeline');
const projectRoutes = require('./routes/projects');
const taskRoutes = require('./routes/tasks');
const PORT = process.env.PORT || 4000;

connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/timeline', timelineRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/tasks ', taskRoutes);


app.get("/", (req, res) => {
  res.status(200).json({
    message: "Api is running",
    status: true,
  });
});


app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});