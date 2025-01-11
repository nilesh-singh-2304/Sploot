import React from 'react'
import mongoose from 'mongoose'
import blog from '@/model/blog'
import { useState , useEffect } from 'react'
import Navbar from '@/components/navbar'
import Link from 'next/link'
import Add from '@/components/add'


const Blogs = ({blogs}) => {
    const [blogss, setblogss] = useState(blogs)

    useEffect(() => {
        initial();
    }, [])

    const [categ] = useState('cat1')
    const initial = () => {
        const fil = blogs.filter((blog) => blog.category == categ)
        setblogss(fil)
    }
    // initial()

    const handleClick = (e) => {
        e.preventDefault()
        const filter = e.target.value
        const filtered = blogs.filter((blog) => blog.category == filter)
        setblogss(filtered)
    }
  return (
    <div className='h-screen'>
        <Navbar/>

        <div className='py-5 bg-slate-100'><Add/></div>
      <div className="h-screen bg-gray-100 md:px-10 px-4 py-12 font-[sans-serif]">
      <div className="max-w-5xl max-lg:max-w-3xl max-sm:max-w-sm mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-8">Latest Blog Posts</h2>
        <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 mb-6 rounded-box">
  <li><button onClick={handleClick} value={'cat1'}>Item 1</button></li>
  <li><button onClick={handleClick} value={'cat2'}>Item 2</button></li>
  <li><button onClick={handleClick} value={'cat3'}>Item 3</button></li>
</ul>
        {blogss.map((blog) => (
            <div key={blog._id} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-sm:gap-8">
            <div className="bg-white rounded overflow-hidden">
              <img src={blog.imageurl} alt="Blog Post 1" className="w-full h-52 object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">{blog.title}</h3>
                <p className="text-gray-500 text-sm">{blog.description}</p>
                <p className="text-orange-500 text-[13px] font-semibold mt-4">{blog.category} , {blog.author}</p>
                <Link href={`/blogss/${blog._id}`} className="mt-4 inline-block px-4 py-2 rounded tracking-wider bg-orange-500 hover:bg-orange-600 text-white text-[13px]">Read More</Link>
              </div>
            </div> 
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}



export async function getServerSideProps(){
    if(!mongoose.connections[0].readyState){
      await mongoose.connect(process.env.MONGO_URI)
  }
    const blogs = await blog.find()
      
    return{
      props:{blogs: JSON.parse(JSON.stringify(blogs)) , revalidate:6000000,} // will be passed to page components as props
    }                  //jsonparse and then json stringify krn se object deep copy ho jaaata h , ye na krn p product serialise nhi ho paa rha tha
  }
  
export default Blogs
