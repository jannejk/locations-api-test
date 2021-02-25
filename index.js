const express = require('express')
const app = express()

const port = process.env.PORT || 3000;

//kun http-pyyntö tulee, kutsu callback funkkaria
app.use((req,res, next) => {
    console.log("hello");
    next();//kutsu seuraavaa middleware funkkaria
})
app.use((req,res, next) => {
    console.log("world!");
    next();//kutsu seuraavaa middleware funkkaria
})
app.use(express.static("public"));

let db = [
    {id: 1, latitude: 80, longitude: 80},
    {id: 2, latitude: 90, longitude: 90},
];
app.get("/api/locations", (req, res) =>{
    res.send(db);
})
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})