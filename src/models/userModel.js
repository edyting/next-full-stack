import mongoose from "mongoose";



const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: [true, "Please provide a username"],
    unique: true,
  },
  email: {
    type: String,
    require: [true, "Please provide a email"],
    unique: true,
  },
  paasword: {
    type: String,
    require: [true, "Please provide a password"],
    unique:true,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
    },
    forgotPasswordToken: String,
    forgotPasswordExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date
  
});


const User = mongoose.model.users || mongoose.model("User", userSchema);

export default User;