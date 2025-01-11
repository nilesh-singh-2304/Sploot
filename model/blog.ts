
import { Schema} from "mongoose";
const mongoose = require("mongoose");

const BlogSchema = new Schema(
  {
    category: {type: String , required:true},
    imageurl: {type: String , required:true },
    title: {type: String , required:true},
    description: {type: String , required:true},
    author: {type: String , required:true},
  },
  { timestamps: true }
); //timestamp true krn se created at , updated at , etc functionalities kaam krn lgti h

mongoose.models = {}; //isk bina product cant be o
export default mongoose.model("Blog", BlogSchema);