// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import User from "@/model/user"
import connectDB from "@/middleware/mongoose";


const handler = async (
    req: NextApiRequest,
    res: NextApiResponse,
  )=> {
    if(req.method == 'POST'){
        // const {name,email} = req.body
        const u = new User({email:req.body.email, password:req.body.password})
        await u.save()
        res.status(200).json({ success:true });
        
    }
    else{
        res.status(400).json({ error : false });
    }
      
  }
  

export default connectDB(handler)