import React from 'react'
import { useAuthContext } from '../../Context/AuthContext';
// import Logout from './Logout'

const ProfileInfo = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="flex-none mr-5 gap-5">
      <div className="form-control">
        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
      </div>
      <div className="dropdown dropdown-hover dropdown-end flex-1">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-20 rounded-full ring ring-white ring-offset-base-100 ring-offset-2">
            <img alt="Tailwind CSS Navbar component" src={authUser.ProfilePic}  />
          </div>
          <div>
            <a>{(authUser.LoginType === "Reader") ? authUser.fullname : authUser.LibraryName}</a>
          </div>
        </div>
        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
          <li><a>Account Section</a></li>
          <li><a>Logout</a></li>
        </ul>
      </div>
    </div>
  )
}

export default ProfileInfo