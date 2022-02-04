const User = require("../model/userModel");
const ErrorHander = require("../utils/ErrorHander");
const sendToken = require("../utils/jwtToken");
const crypto = require("crypto");


exports.registerUser = async (req,res,next) => {

        const {username} = req.body

        const user = await User.create({
            username
        })

        sendToken(user,201,res)
};

exports.loginUser = async (req, res, next) => {
  const { username} = req.body;

  // checking if user has given password and email both

  if (!username) {
    return next(new ErrorHander("Please Enter Email & Password", 400));
  }

  const user = await User.findOne({ username });

  if (!user) {
    return next(new ErrorHander("Invalid username", 401));
  }

  sendToken(user,201,res)

};


exports.logoutUser = async (req,res,next)=> {

    res.cookie("token",null, {
      expires:new Date(Date.now()),
      httpOnly:true
    });

    res.status(200).json({
      success:true,
      message:"Logout Successfully"
    });
};
