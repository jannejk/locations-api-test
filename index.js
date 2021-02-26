const express = require("express");
let locationsrouter = require("./routes/locationrouter.js");

const app = express();
const port = process.env.PORT || 3000;

// display "static files"
app.use(express.static("public"));

// jos url alkaa http://localhost:8080/api/locations
app.use("/api/locations", locationsrouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});