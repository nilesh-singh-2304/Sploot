import React from 'react'
import Link from 'next/link'

const Index = () => {
  return (
    <div className='h-screen'>
      <div className="bg-gradient-to-b h-screen from-orange-600 via-orange-500 to-orange-400 px-6 sm:py-20 py-10 font-[sans-serif]">
      <div className="max-w-screen-xl mx-auto text-center text-white">
        <h1 className="text-5xl max-sm:text-3xl font-extrabold leading-tight mb-6">Welcome to Sploot</h1>
        <p className="text-lg mb-12">This is an Assignment website for Sploot.</p>
        <Link href="/signup"><button className="px-6 mx-2 py-3 rounded-full bg-white text-blue-900 font-semibold hover:bg-blue-100 transition duration-300 ease-in-out">Login</button></Link>
        <Link href="/blogs"><button className="px-6 mx-2 py-3 rounded-full bg-white text-blue-900 font-semibold hover:bg-blue-100 transition duration-300 ease-in-out">Blogs</button></Link>
      </div>
    </div>
    </div>
  )
}

export default Index
