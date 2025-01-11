import React from 'react'
import { useState , useEffect } from 'react'
import { useRouter } from 'next/router'
const Logout = () => {
    const [logg, setlogg] = useState(false)
          const router = useRouter()
              useEffect(() => {
                  if(localStorage.getItem('token')){
                    setlogg(true)               
                  }
                }, [])

                const handleClick = () => {
                    localStorage.removeItem('token')
                    setlogg(false)
                    router.reload()
                }
  return (
    <div>
      {logg && <button onClick={handleClick} className="btn">Logout</button>}
    </div>
  )
}

export default Logout
