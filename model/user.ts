
import { Schema} from "mongoose";
const mongoose = require("mongoose");

const UserSchema = new Schema(
  {
    email: {type: String , required:true , unique:true},
    password: {type: String , required:true},
  },
  { timestamps: true }
); //timestamp true krn se created at , updated at , etc functionalities kaam krn lgti h

mongoose.models = {}; //isk bina product cant be overwrite ka error aa jyega
export default mongoose.model("User", UserSchema);
