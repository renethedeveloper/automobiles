const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;
const cors = require("cors");
const morgan = require("morgan");


// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
  });
  
const Car = require("./models/schema.jsx");

app.use(cors());

app.use(express.json());

require('dotenv').config();

require("./src/config/db.cjs");

app.use(morgan('dev'));

app.get("/", (req, res) => {
  res.send("Welcome to my server about Cars, make a request to '/info' to learn more!");
});

app.get("/cars", async (req, res) => {
    console.log("route hit!")
    const carsFromDB = await Car.find();

    console.log(carsFromDB)
    res.send(carsFromDB);
})


app.post("/cars", async (req,res) => {
    console.log(req.body);
    let car = req.body;
    const responseFromDB = await Car.create(car);

   console.log(responseFromDB);
    res.send("Route is good")

})
  

app.listen(PORT, () => {
  console.log(`Up and running!!!  PORT ${PORT}`);
});
