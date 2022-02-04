var csvUser = require("../model/dataModel");
const csv = require("csvtojson");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ErrorHander = require("../utils/ErrorHander")

//CREATE DATA
exports.createUser = async (req,res,next) => {  

    const data = await csvUser.create(req.body);

    res.status(201).json({
        success:true,
        data
     })
    
}

//GET DATA
exports.getData = async (req,res) => {
    const data = await csvUser.find();

    if(!data){
        return next(new ErrorHander("Data not found",400))
    }

    res.status(200).json({
        success:true,
        data
    });
}

//UPLOAD DATA
exports.uploadDataToMongo = async (req,res) => {
    csv()
    .fromFile(req.file.path)
    .then((jsonObj)=>{

    csvUser.insertMany(jsonObj,(err,data)=>{
        if(err){
            console.log(err);
        }
    })
})

    res.status(200).json({
        success:true,
        message:"File uploaded successfully"
    });
}

//UPDATE DATA
exports.updateData = async (req,res,next) => {
    var data = await csvUser.findById(req.params.id)
    if(!data){
        return next(new ErrorHander("User not found",400))
    };
    
    data = await csvUser.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true,
        useFindAndMOdify:false
    });

    res.status(200).json({
        success:true,
        data
    })
}

//DELETE DATA
exports.deleteData  = async (req,res ,next) => {
    
    const data = await csvUser.findById(req.params.id);

    if(!data){
        return next(new ErrorHander("Data not found",400))
    };

    await data.remove();

    res.status(200).json({
        success:true,
        message:"Data is deleted"
    });
}

    