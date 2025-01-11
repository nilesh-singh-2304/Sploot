
import { Schema} from "mongoose";
const mongoose = require("mongoose");

const CategorySchema = new Schema(
  {
    category: {type: String , required:true},
    imageurl: {type: String , required:true , unique:true},
  },
  { timestamps: true }
); //timestamp true krn se created at , updated at , etc functionalities kaam krn lgti h

mongoose.models = {}; //isk bina product cant be overwrite ka error aa jyega
export default mongoose.model("Category", CategorySchema);
