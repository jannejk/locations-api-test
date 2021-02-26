const express = require("express");

let db = [
  { id: 1, latitude: 80, longitude: 80 },
  { id: 1, latitude: 80, longitude: 80 },
];

let locationsrouter = express.Router();

locationsrouter.get("/", (req, res) => {
  res.send(db);
});

locationsrouter.get("/1", (req, res) => {
  res.send(db[1]);
});

module.exports = locationsrouter;