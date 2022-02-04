const express = require("express");
var app = express();
const path = require("path");
const cookieParser = require("cookie-parser")

app.use(express.json())
app.use(cookieParser())

//static Folder
app.use(express.static(path.resolve(__dirname,'files')));

//Route Imports
const multer = require("./Routes/multerRoutes");
const user =  require("./Routes/userRoutes")

app.use("/api/v1",multer)
app.use("/api/v1",user);

module.exports = app;