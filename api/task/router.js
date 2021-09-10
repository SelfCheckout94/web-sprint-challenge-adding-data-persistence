const express = require("express");
const Tasks = require("./model");

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

module.exports = router;
