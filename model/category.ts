
import { Schema} from "mongoose";
const mongoose = require("mongoose");

const CategorySchema = new Schema(
  {
    category: {type: String , required:true},
    imageurl: {type: String , required:true , unique:true},
  },
  { timestamps: true }
); 

mongoose.models = {}; 
export default mongoose.model("Category", CategorySchema);
