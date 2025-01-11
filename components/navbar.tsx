import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";


const Navbar = () => {

    const [logg, setlogg] = useState(false)
          useEffect(() => {
              if(localStorage.getItem('token')){
                setlogg(true)               //agr user already logged in h toh use login page nhi dikhayenge
              }
            }, [])

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="flex-none">

            {!logg && <Link href={'/signin'}><button className="btn">Login</button></Link>}
          
          {logg && <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
