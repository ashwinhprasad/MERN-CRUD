//loading modules
const express = require("express");
const mongoose = require("mongoose")
const cors = require("cors");
const bodyParser = require("body-parser")
require("dotenv").config();


//app config
const app = express();


//middlewares
app.use(bodyParser.json())
app.use(express.json())
app.use(cors())


//moongoose
mongoose.connect(process.env.MONGOURL,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
})
 .then(() => console.log("DB connected...."))
 .catch((err) => console.log(err))


//routes
app.use("/item",require("./routes/item"))


//port
const port = process.env.PORT || 5000;


//listen
app.listen(port,() => console.log(`App started at ${port}`));