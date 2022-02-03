const express = require("express");
const app = express();
const cookieParser = require("cookie-parser")

app.use(express.json())
app.use(cookieParser())

//Route Imports

app.use("/api/v1")
app.use("/api/v1")

module.exports = app;