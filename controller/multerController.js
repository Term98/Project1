var csvUser = require("../Database/databaseModel");
const csv = require("csvtojson");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");


exports.getData = async (req,res) => {
    csvUser.find((err,data)=>{
        if(err){
            console.log(err);
        }else{
            if( data != ''){
                console.log('demo',{data:data});
            }else{
                console.log('demo',{data:''})
            }
        }
    });
}

exports.uploadDataToMongo = async (req,res) => {
    csv()
    .fromFile(req.file.path)
    .then((jsonObj)=>{
    console.log(jsonObj);

    csvUser.insertMany(jsonObj,(err,data)=>{
        if(err){
            console.log(err);
        }
    })
})

    res.status(200).json({
        success:true,
        message:"File Uploaded successfully"
    })
}