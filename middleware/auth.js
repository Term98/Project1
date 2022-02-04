const ErrorHander = require("../utils/ErrorHander");
const jwt = require("jsonwebtoken");
const User = require("../model/userModel");


exports.isAuthenticatedUser = async (req,res,next) => {
        const {token} = req.cookies;

        if(!token){
            return next(new ErrorHander("Please Login To Access This  Resource"));
        };

        const decodeData = jwt.verify(token,process.env.JWT_SECRET);

        req.user = await User.findById(decodeData.id);

        next();
};
