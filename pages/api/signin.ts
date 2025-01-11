// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import User from "@/model/user";
import connectDB from "@/middleware/mongoose";
import jwt from "jsonwebtoken";


const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method == "POST") {
    const user = await User.findOne({ email: req.body.email });
    
    if (user) {
      if (
        req.body.email == user.email &&
        req.body.password == user.password
      ) {
        var token = jwt.sign(
          { success: true, email: user.email, name: user.name },
          "Secret you wanna give",
          { expiresIn: "1d" }
        );
        res.status(200).json({ success: true, token, email: req.body.email });
      } else {
        res.status(200).json({ success: false, error: "Invalid Credentials" });
      }
    } else {
      res.status(200).json({ success: false, error: "User Not Found" });
    }
  } else {
    res.status(400).json({ error: "This method is not allowed" });
  }
};

export default connectDB(handler);
