import type { NextApiRequest, NextApiResponse } from "next";
import blog from "@/model/blog";
import connectDB from "@/middleware/mongoose";


const handler = async (
    req: NextApiRequest,
    res: NextApiResponse,
  )=> {
    if(req.method == 'POST'){
        console.log(req.body)
        
                const p = new blog({
                    title: req.body.title,
                    description: req.body.description,
                    category: req.body.category,
                    imageurl: req.body.image,
                    author: req.body.email
                })
                await p.save();
            
            res.status(200).json({ success:true ,prod:p});
            
        
    }
    else{
        res.status(400).json({ success : false });
    }
      
  }
  

export default connectDB(handler)