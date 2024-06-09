import React, { useState } from "react";
import useSignupReader from "../../Hooks/useSignupReader";

const SignupReader = () => {
  const [inputs, setInputs] = useState({
    fullname: "",
    email: "",
    Mobile: "",
    AadharNumber: "",
    City: "",
    Password: "",
    ConfirmPassword: "",
  })

  const { loading, readerSignup } = useSignupReader();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await readerSignup(inputs);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="w-full p-10 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0">
          <h1 className="text-4xl font-semibold text-center text-gray-300 border-spacing-y-32 p-2">Register as Reader</h1>
          <progress className="progress w-100 progress-info" value="100" max="100"></progress>

          <form onSubmit={handleSubmit} className="m-7">
            <div className="sm:flex">
              <div className="col m-2">

                {/* Input Label for the User Fullname */}
                <div className="p-2 my-1">
                  <label className="label item-center flex p-2">
                    <span className=" text-xl text-white label-base flex gap-3 label-text">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="lightblue" className="w-7 h-7 opacity-100"><path d="M14 21L12 23L10 21H4.99509C3.89323 21 3 20.1074 3 19.0049V4.99509C3 3.89323 3.89262 3 4.99509 3H19.0049C20.1068 3 21 3.89262 21 4.99509V19.0049C21 20.1068 20.1074 21 19.0049 21H14ZM19 19V5H5V19H10.8284L12 20.1716L13.1716 19H19ZM7.97216 18.1808C7.35347 17.9129 6.76719 17.5843 6.22083 17.2024C7.46773 15.2753 9.63602 14 12.1022 14C14.5015 14 16.6189 15.2071 17.8801 17.0472C17.3438 17.4436 16.7664 17.7877 16.1555 18.0718C15.2472 16.8166 13.77 16 12.1022 16C10.3865 16 8.87271 16.8641 7.97216 18.1808ZM12 13C10.067 13 8.5 11.433 8.5 9.5C8.5 7.567 10.067 6 12 6C13.933 6 15.5 7.567 15.5 9.5C15.5 11.433 13.933 13 12 13ZM12 11C12.8284 11 13.5 10.3284 13.5 9.5C13.5 8.67157 12.8284 8 12 8C11.1716 8 10.5 8.67157 10.5 9.5C10.5 10.3284 11.1716 11 12 11Z"></path></svg>              Name
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your Name"
                    className="input input-bordered input-info w-full max-w-xs"
                    value={inputs.fullname}
                    onChange={(e) => setInputs({ ...inputs, fullname: e.target.value })}
                    autoComplete="off" />
                </div>

                {/* Input Label for the E-mail area */}
                <div className="p-2 my-1">
                  <label className="label item-center flex p-2">
                    <span className=" text-xl text-white label-base flex gap-3 label-text">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="lightblue" className="w-7 h-7 opacity-100"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                      E-mail
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your mail id"
                    className="input input-bordered input-info w-full max-w-xs"
                    autoComplete="off"
                    value={inputs.email}
                    onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
                  />
                </div>

                {/* Input Label for the Contact Number */}
                <div className="p-2 my-1">
                  <label className="label item-center flex p-2">
                    <span className=" text-xl text-white label-base flex gap-3 label-text">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7 opacity-100" fill="lightblue"><path d="M7 4V20H17V4H7ZM6 2H18C18.5523 2 19 2.44772 19 3V21C19 21.5523 18.5523 22 18 22H6C5.44772 22 5 21.5523 5 21V3C5 2.44772 5.44772 2 6 2ZM12 17C12.5523 17 13 17.4477 13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17Z"></path></svg>                Mobile
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your Cantact Number"
                    pattern='\d{10}'
                    title='Enter exactly 10-digits'
                    className="input input-bordered input-info w-full max-w-xs"
                    value={inputs.Mobile}
                    onChange={(e) => setInputs({ ...inputs, Mobile: e.target.value })}
                    autoComplete="off" />
                </div>

                {/* Input Label for Aadhar Number */}
                <div className="p-2 my-1">
                  <label className="label item-center flex p-2">
                    <span className=" text-xl text-white label-base flex gap-3 label-text">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7 opacity-100" fill="lightblue"><path d="M3 6H21V18H3V6ZM2 4C1.44772 4 1 4.44772 1 5V19C1 19.5523 1.44772 20 2 20H22C22.5523 20 23 19.5523 23 19V5C23 4.44772 22.5523 4 22 4H2ZM13 8H19V10H13V8ZM18 12H13V14H18V12ZM10.5 10C10.5 11.3807 9.38071 12.5 8 12.5C6.61929 12.5 5.5 11.3807 5.5 10C5.5 8.61929 6.61929 7.5 8 7.5C9.38071 7.5 10.5 8.61929 10.5 10ZM8 13.5C6.067 13.5 4.5 15.067 4.5 17H11.5C11.5 15.067 9.933 13.5 8 13.5Z"></path></svg>
                      Aadhar Number
                    </span>
                  </label>
                  <input
                    type="text"
                    pattern='\d{12}'
                    title='Enter exactly 12 digits'
                    placeholder="Enter your Aadhar Number"
                    className="input input-bordered input-info w-full max-w-xs"
                    value={inputs.AadharNumber}
                    onChange={(e) => setInputs({ ...inputs, AadharNumber: e.target.value })}
                    autoComplete="off" />
                </div>
              </div>

              {/* Column number 2 */}
              <div className="col m-2">

                {/* Input Label for City */}
                <div className="p-2 my-1">
                  <label className="label item-center flex p-2">
                    <span className=" text-xl text-white label-base flex gap-3 label-text">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="lightblue" className="w-7 h-7 opacity-100"><path d="M21 19H23V21H1V19H3V4C3 3.44772 3.44772 3 4 3H14C14.5523 3 15 3.44772 15 4V19H17V9H20C20.5523 9 21 9.44772 21 10V19ZM7 11V13H11V11H7ZM7 7V9H11V7H7Z"></path></svg>
                      City
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your City"
                    className="input input-bordered input-info w-full max-w-xs"
                    value={inputs.City}
                    onChange={(e) => setInputs({ ...inputs, City: e.target.value })}
                    autoComplete="off" />
                </div>

                {/* Input Label for Password */}
                <div className="p-2 my-1">
                  <label className="label item-center flex p-2">
                    <span className=" text-xl text-white label-base flex gap-3 label-text">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="lightblue" className="w-7 h-7 opacity-100"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                      Password
                    </span>
                  </label>
                  <input
                    type="password"
                    placeholder="Enter Password"
                    className="input input-bordered input-info w-full max-w-xs"
                    value={inputs.Password}
                    onChange={(e) => setInputs({ ...inputs, Password: e.target.value })}
                    autoComplete="off" />
                  <span className='text-yellow-500 text-xs'><br />Enter atleast 8 characters</span>
                </div>

                {/* Input Label for the Password area */}
                <div className="p-2 my-1">
                  <label className="label item-center flex p-2">
                    <span className=" text-xl text-white label-base flex gap-3 label-text">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="lightblue" className="w-7 h-7 opacity-100"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                      Confirm Password
                    </span>
                  </label>
                  <input
                    type="password"
                    placeholder="Enter Password"
                    className="input input-bordered input-info w-full max-w-xs"
                    value={inputs.ConfirmPassword}
                    onChange={(e) => setInputs({ ...inputs, ConfirmPassword: e.target.value })}
                    autoComplete="off" />
                </div>
              </div>
            </div>
            {/* Login Button */}
            <div className="justify-center flex my-4 mt-8 ">
              <button className="btn btn-outline btn-block btn-info text-xl"
                disabled={loading}>
                {loading ? <span className='loading loading-spinner'></span> : "Register"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignupReader;
