const express = require("express");
var app = express();
const path = require("path");
app.use(express.json())

//Route Imports

//static Folder
app.use(express.static(path.resolve(__dirname,'files')));

const multer = require("./Routes/multerRoutes")

app.use("/api/v1",multer)
// app.use("/api/v1")
module.exports = app;