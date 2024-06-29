import React, { useState } from 'react'
import { useAuthContext } from '../../Context/AuthContext';
import { Link } from 'react-router-dom';
import Logout from '../Logout'


const ProfileInfo = () => {
  const { authUser } = useAuthContext();

  return (
    <div className="flex-none px-5 gap-5">
      <div className="dropdown-hover px-5 dropdown dropdown-end flex-1">
        <div tabIndex={0} role="button" className="btn flex m-auto my-1 btn-ghost btn-circle avatar">
          <div className="w-20 items-center mx-auto rounded-full ring ring-white ring-offset-base-100 ring-offset-2">
            <img alt="Tailwind CSS Navbar component" src={authUser.ProfilePic} />
          </div>
        </div>
        <div>
          <span className='text-lg text-center font-bold'>{(authUser.LoginType === "Reader") ? authUser.fullname : authUser.LibraryName}</span>
        </div>
        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
          <li><Link to={'/Account'}>Account Section</Link></li>
          <li><Link to={'/GetCityBooks'}>Get City Books</Link></li>
          {(authUser.LoginType === "Distributor") ? <li><Link to={'/registerBooks'}>Register Your Books</Link></li> : <div></div>}
          <li><Logout /></li>
        </ul>
      </div>
    </div>
  )
}

export default ProfileInfo