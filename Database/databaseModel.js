const mongoose = require("mongoose");

var csvSchema = new mongoose.Schema({
    Username:{
        type:String
    },
    Identifier:{
        type:Number
    },
    Firstname:{
        type:String
    },
    Lastname:{
        type:String
    }

});

module.exports = mongoose.model("Users",csvSchema);