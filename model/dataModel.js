const mongoose = require("mongoose");

var csvSchema = new mongoose.Schema({
    Username:{
        type:String,
        required: [true, "Please Enter Username"]
    },
    Identifier:{
        type:Number
    },
    Firstname:{
        type:String
    },
    Lastname:{
        type:String
    },
    createdAt: {
    type: Date,
    default: Date.now,
    }

});

module.exports = mongoose.model("Users",csvSchema);