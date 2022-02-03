const express = require("express");
const router = express.Router();
const multer = require("multer");
const mongoose = require("mongoose");
var csvUser = require("../Database/databaseModel");
const csv = require("csvtojson");
const app = require("../app");
const { uploadDataToMongo, getData } = require("../controller/multerController");


//Initializing multer 
const fileStorageEngine = multer.diskStorage({
    destination: (req, file , cb ) => {
        cb(null,"./files");
    },
    filename: (req,file,cb) => {
        cb(null, Date.now() + "--" + file.originalname);
    },
});

const upload = multer({storage:fileStorageEngine}).single("file");
    

router.route("/get").get(getData);

router.route("/single").post(upload , uploadDataToMongo )

module.exports = router;