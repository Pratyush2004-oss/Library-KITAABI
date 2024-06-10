import React from 'react'
import { useAuthContext } from '../../Context/AuthContext';
import { Link } from 'react-router-dom';
import Logout from '../Logout'

const ProfileInfo = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="flex-none mx-5 px-5 gap-5">
      <div className="form-control">
        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
      </div>
      <div className=" flex-col items-center dropdown-hover dropdown dropdown-end flex-1">
        <div tabIndex={0} role="button" className="btn mx-3 my-1 btn-ghost btn-circle avatar">
          <div className="w-20 items-center rounded-full ring ring-white ring-offset-base-100 ring-offset-2">
            <img alt="Tailwind CSS Navbar component" src={authUser.ProfilePic} />
          </div>
        </div>
        <div>
          <h1 className='text-lg text-center font-bold'>{(authUser.LoginType === "Reader") ? authUser.fullname : authUser.LibraryName}</h1>
        </div>
        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
          {(authUser.LoginType === "Distributor") ? <li><Link to={'/registerBooks'}>Register Your Books</Link></li> : <div></div>}
          <li><Link to={'/Account'}>Account Section</Link></li>
          <li><Logout /></li>
        </ul>
      </div>
    </div>
  )
}

export default ProfileInfo