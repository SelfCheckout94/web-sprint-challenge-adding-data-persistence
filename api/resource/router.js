// build your `/api/resources` router here
const express = require("express");
const Resources = require("./model");

const router = express.Router();

router.get("/", async (req, res, next) => {
  const resources = await Resources.getAll();
  res.status(200).json(resources);
});

router.post("/", async (req, res, next) => {
  try {
    const newResource = await Resources.insert(req.body);
    res.status(201).json(newResource);
  } catch (err) {
    next();
  }
});

// eslint-disable-next-line
router.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    custom: "Something went wrong with the resource router.",
    message: err.message,
    stack: err.stack,
  });
});

module.exports = router;
