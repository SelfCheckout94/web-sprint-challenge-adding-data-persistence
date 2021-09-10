const express = require("express");
const Tasks = require("./model");
const db = require("./../../data/dbConfig");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const tasks = await Tasks.getAll();
    const convertedTasks = tasks.map((task) => {
      return {
        ...task,
        task_completed: Boolean(task.task_completed),
      };
    });
    res.status(200).json(convertedTasks);
  } catch (err) {
    next();
  }
});

router.post("/", async (req, res, next) => {
  try {
    if (!req.body.project_id) {
      next({
        status: 400,
        message: "Task description and project ID are required",
      });
    } else {
      const newTask = await Tasks.insert(req.body);
      res.status(201).json({
        ...newTask,
        task_completed: Boolean(newTask.task_completed),
      });
    }
  } catch (err) {
    next();
  }
});

module.exports = router;
