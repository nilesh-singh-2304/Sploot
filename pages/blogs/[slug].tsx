import React, { useState } from 'react'
import mongoose from 'mongoose'
import blog from '@/model/blog'

const Blog = ({blogs}) => {
    const [blog, setblog] = useState(blogs)
  return (
    <div className='bg-slate-100'>
          <div className="h-screen bg-slate-100 grid md:grid-cols-2 items-center md:gap-4 gap-8 font-[sans-serif] max-w-5xl max-md:max-w-md mx-auto">
      <div className="max-md:order-1 max-md:text-center">
        <h3 className="text-gray-800 md:text-3xl text-2xl md:leading-10">{blog.title}</h3>
        <p className="mt-4 text-sm text-gray-600">{blog.description}</p>
        <button type="button" className="px-5 py-2.5 mt-8 rounded text-sm outline-none tracking-wide bg-blue-600 text-white hover:bg-blue-700">Explore</button>
      </div>
      <div className="md:h-[470px]">
        <img src={blog.imageurl} className="w-full h-full md:object-contain" />
      </div>
    </div>
    </div>
  )
}

export async function getServerSideProps(context){
    if(!mongoose.connections[0].readyState){
      await mongoose.connect(process.env.MONGO_URI)
  }
    let error = null;
    console.log(context.query.slug)
    let blogs = await blog.findOne({_id : context.query.slug})
    if(blogs == null){
      return{
        props:{error : 404} // will be passed to page components as props
      }     
    }
      
    return{
      props:{ blogs: JSON.parse(JSON.stringify(blogs))} // will be passed to page components as props
    }                  //jsonparse and then json stringify krn se object deep copy ho jaaata h , ye na krn p product serialise nhi ho paa rha tha
  }

export default Blog
