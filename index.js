const express = require("express");
const authRoutes = require("./routers/authRoutes");
const moviesRoutes = require("./routers/moviesRoutes");
const {logRequest} = require("./middleware/logger")
require("dotenv").config();
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(cors());
app.use(logRequest);
app.use("/", authRoutes);
app.use("/movies", moviesRoutes);



  mongoose
  .connect("mongodb://0.0.0.0:27017/Testdb")
  .then(() => {
    console.log("Database connection successful");
  });

app.listen(process.env.PORT, () => {
  console.log(`App is listening at port ${process.env.PORT}`);
});

app.use((error, req, res, next) => {
  try {
    if(error instanceof SyntaxError && error.status === 400 && error.body) {
      res.status(400).send({
	      "status":"ERROR", "data":"Error in req body", "statusCode":401
      });
    }
    else
	    next();
  } catch (err) {
    res.status(500).send({
	    "status":"ERROR", "data":"Error in server", "statusCode":500
    });
  }
});