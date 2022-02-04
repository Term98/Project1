const User = require("../model/userModel");
const ErrorHander = require("../utils/ErrorHander");
const sendToken = require("../utils/jwtToken");

//REGISTER USER
exports.registerUser = async (req,res,next) => {

        const {username} = req.body

        const user = await User.create({
            username
        })

        sendToken(user,201,res)
};

//LOGIN USER
exports.loginUser = async (req, res, next) => {
  const { username} = req.body;

  // checking if user has given USERNAME

  if (!username) {
    return next(new ErrorHander("Please Enter username", 400));
  }

  const user = await User.findOne({ username });

  if (!user) {
    return next(new ErrorHander("Invalid username", 401));
  }

  sendToken(user,201,res)

};

//LOGOUT USER
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
