const path = require("path");
const express = require("express");
const cookieparse = require("cookie-parser");
const app = express();

//require routers
const userRoutes = require("./routes/userRoutes");
const projectRoutes = require("./routes/projectRoutes");
const taskRoutes = require("./routes/taskRoutes");

//require port
const PORT = 3000;

//parse request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieparse());
app.use(express.static(path.resolve(__dirname, "../client")));

//define route handlers
app.use("/api/userRoutes", userRoutes);
app.use("/api/projectRoutes", projectRoutes);
app.use("/api/taskRoutes", taskRoutes);

// app.get('/build', express.static(path.join(__dirname, '../build/')));

//global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 500,
    message: { err: "An error occured" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;
