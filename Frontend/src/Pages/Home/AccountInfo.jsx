import React from 'react'
import { useAuthContext } from '../../Context/AuthContext'

const AccountInfo = () => {
  const { authUser } = useAuthContext();
  return (
    <>
      <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0">
          <h1 className="text-4xl font-semibold text-center text-gray-300 border-spacing-y-32 p-3 mt-4">Account Details</h1>
          <progress className="progress w-100 progress-info" value="100" max="100"></progress>

          <div className="sm:flex justify-evenly">
            <div className="col m-2">

              {/* Display for the name */}
              <div className="p-5 my-5">
                <label className="label item-center flex p-2">
                  <span className=" text-3xl font-bold text-white label-base flex gap-3 label-text">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-9 w-9" fill="lightblue"><path d="M2 19V8H1V6H4V4C4 3.44772 4.44772 3 5 3H19C19.5523 3 20 3.44772 20 4V6H23V8H22V19H23V21H1V19H2ZM13 19V12H11V19H13ZM8 19V12H6V19H8ZM18 19V12H16V19H18ZM6 5V6H18V5H6Z"></path></svg>
                    {(authUser.LoginType === "Reader") ? <span>User Name</span> : <span>Library Name</span>}
                  </span>
                </label>
                <label className="label item-center flex p-2">
                  <span className=" text-2xl ml-10 text-white text-center label-base flex gap-3 label-text">
                    {(authUser.LoginType === "Reader") ? authUser.fullname : <span>{authUser.LibraryName}</span>}
                  </span>
                </label>
              </div>

              {/* display area for the E-mail */}
              <div className="p-5 my-5">
                <label className="label item-center flex p-2">
                  <span className=" text-3xl font-bold text-white label-base flex gap-3 label-text">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="lightblue" className="w-9 h-9 opacity-100"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                    E-mail
                  </span>
                </label>
                <label className="label ml-10 item-center flex p-2">
                  <span className=" sm:text-2xl text-xl text-white label-base flex gap-3 label-text">
                    {(authUser.LoginType === "Reader") ? <span>{authUser.email}</span> : <span>{authUser.email}</span>}
                  </span>
                </label>
              </div>

              {/* Display area for Mobile Number */}
              <div className="p-5 my-5">
                <label className="label item-center flex p-2">
                  <span className=" text-3xl font-bold text-white label-base flex gap-3 label-text">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-9 h-9 opacity-100" fill="lightblue"><path d="M7 4V20H17V4H7ZM6 2H18C18.5523 2 19 2.44772 19 3V21C19 21.5523 18.5523 22 18 22H6C5.44772 22 5 21.5523 5 21V3C5 2.44772 5.44772 2 6 2ZM12 17C12.5523 17 13 17.4477 13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17Z"></path></svg>
                    Mobile
                  </span>
                </label>
                <label className="label ml-10 item-center flex p-2">
                  <span className=" text-2xl text-white label-base flex gap-3 label-text">
                    {(authUser.LoginType === "Reader") ? <span>{authUser.Mobile}</span> : <span>{authUser.Mobile}</span>}
                  </span>
                </label>
              </div>

            </div>

            <div className="col m-2">

              {/* Display area for Aadhar Number or Address */}
              <div className="p-5 my-5">
                <label className="label item-center flex p-2">
                  <span className=" text-3xl font-bold text-white label-base flex gap-3 label-text">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-9 h-9" fill="lightblue"><path d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z"></path></svg>
                    {(authUser.LoginType === "Reader") ? <span>Aadhar Number</span> : <span>Address</span>}
                  </span>
                </label>
                <label className="label ml-10 item-center flex p-2">
                  <span className=" text-2xl text-white label-base flex gap-3 label-text">
                    {(authUser.LoginType === "Reader") ? <span>{authUser.AadharNumber}</span> : <span>{authUser.Address}</span>}
                  </span>
                </label>
              </div>


              {/* Display area for City */}
              <div className="p-5 my-5">
                <label className="label item-center flex p-2">
                  <span className=" text-3xl font-bold text-white label-base flex gap-3 label-text">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="lightblue" className="w-9 h-9 opacity-100"><path d="M21 19H23V21H1V19H3V4C3 3.44772 3.44772 3 4 3H14C14.5523 3 15 3.44772 15 4V19H17V9H20C20.5523 9 21 9.44772 21 10V19ZM7 11V13H11V11H7ZM7 7V9H11V7H7Z"></path></svg>
                    City
                  </span>
                </label>
                <label className="label ml-10 item-center flex p-2">
                  <span className=" text-2xl text-white label-base flex gap-3 label-text">
                    {(authUser.LoginType === "Reader") ? authUser.City.charAt(0).toUpperCase() + authUser.City.slice(1) : authUser.City.charAt(0).toUpperCase() + authUser.City.slice(1)}
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AccountInfo