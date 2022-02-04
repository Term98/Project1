const express = require("express");
const router = express.Router();
const multer = require("multer");
const { uploadDataToMongo, getData, updateData, deleteData } = require("../controller/dataController");
const { isAuthenticatedUser } = require("../middleware/auth");


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
    

router.route("/get")
.get(isAuthenticatedUser,getData);

router.route("/upload")
.post(isAuthenticatedUser, upload , uploadDataToMongo);

router.route("/data/:id")
.put(isAuthenticatedUser,updateData)
.delete(isAuthenticatedUser,deleteData);

module.exports = router;