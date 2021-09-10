const db = require("./../../data/dbConfig");

const insert = async ({ resource_name, resource_description }) => {
  const newResource = await db("posts").insert({
    resource_name,
    resource_description,
  });
  return newResource;
};

module.exports = {
  insert,
};
