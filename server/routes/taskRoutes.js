const express = require("express");
const router = express.Router();

const taskController = require("../controllers/taskController");

router.post("/newTask", taskController.createTask, (req, res) => {
  res.status(200).json("Task created under project xyz");
});

router.post("/viewTasks", taskController.viewTasks, (req, res) => {
  console.log("Entering inside View task task router");
  res.status(200).json(res.locals.tasks);
});

router.delete(
  "/deleteTask/:taskid",
  taskController.deleteTask,
  taskController.viewTasks,
  (req, res) => {
    res.status(200).json(res.locals.tasks);
  }
);

module.exports = router;
