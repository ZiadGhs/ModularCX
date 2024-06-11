const env = require("dotenv").config({ path: "./.env" });
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const router = require("./routes/router");

// Allow all origins to access the server
app.use(
  cors({
    origin: "http://localhost:5173", // Allow your frontend origin
    credentials: true,
    allowedHeaders: [
      "Origin",
      "X-Api-Key",
      "X-Requested-With",
      "Content-Type",
      "cookies",
      "Accept",
      "Authorization",
    ],
    exposedHeaders: ["cookies"],
  })
);

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: false }));
app.use(router);

// mongoose.connect(process.env.MONGO_LINK)
//   .then(() => {
//     console.log("Mongo Connection open");
//   })
//   .catch(err => {
//     console.log('OHH no mongo connection error');
//     console.log(err);
//   });
mongoose.connect('mongodb://127.0.0.1:27017/movieApp')
.then(()=>{
    console.log("connection open");
})
.catch(err =>{
    console.log('error ohh noo');
    console.log(err)
})
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
