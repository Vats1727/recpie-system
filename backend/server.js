const express = require("express");
const app = express();
const dotenv=require("dotenv").config()
const connectDb=require("./config/connectionDb")
const cors=require("cors")



const PORT = process.env.PORT || 5000; // Default to 5000 if PORT is not set
connectDb()

app.use(express.json())
app.use(cors())

app.use("/",require("./routes/user"))
app.use("/recipe",require("./routes/recipe"))

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
