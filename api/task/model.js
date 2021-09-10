const db = require("./../../data/dbConfig");

const getAll = () => {
  return db("tasks as t")
    .leftJoin("projects as p", "p.project_id", "t.project_id")
    .select(
      "task_id",
      "task_description",
      "task_notes",
      "task_completed",
      "project_name",
      "project_description"
    );
};

module.exports = {
  getAll,
};
