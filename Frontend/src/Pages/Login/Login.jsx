import React, { useState } from "react";
import useLogin from "../../Hooks/useLogin";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: '',
    Password: '',
    LoginType: '',
  });
  const { loading, Login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await Login(inputs);

  }
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0">
        <h1 className="text-4xl font-semibold text-center text-gray-300 border-spacing-y-32 p-3 mt-7">Login</h1>
        <progress className="progress w-100 progress-info" value="100" max="100"></progress>

        <form className="my-7 mx-3" onSubmit={handleSubmit}>

          {/* Input Label for the E-mail area */}
          <div className="p-2 my-3">
            <label className="label item-center flex p-2">
              <span className=" text-xl text-white label-base flex gap-3 label-text">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="lightblue" className="w-7 h-7 opacity-100"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                E-mail
              </span>
            </label>
            <input
              type="email"
              placeholder="Enter your mail id"
              className="input input-bordered input-info w-full max-w-xs"
              value={inputs.email}
              onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
              autoComplete="off" />
          </div>

          {/* Input Label for the Password area */}
          <div className="p-2 my-3">
            <label className="label item-center flex p-2">
              <span className=" text-xl text-white label-base flex gap-3 label-text">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="lightblue" className="w-7 h-7 opacity-100"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter the Password"
              className="input input-bordered input-info w-full max-w-xs"
              value={inputs.Password}
              onChange={(e) => setInputs({ ...inputs, Password: e.target.value })}
              autoComplete="off" />
          </div>

          {/* Text input field for LoginType */}
          <div className="p-4 my-6">
            <label className="label item-center flex p-2">
              <span className=" text-xl text-white label-base flex gap-3 label-text">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7 opacity-100" fill="lightblue"><path d="M10 11V8L15 12L10 16V13H1V11H10ZM2.4578 15H4.58152C5.76829 17.9318 8.64262 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C8.64262 4 5.76829 6.06817 4.58152 9H2.4578C3.73207 4.94289 7.52236 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C7.52236 22 3.73207 19.0571 2.4578 15Z"></path></svg>
                Login Type
              </span>
            </label>
            <div>
              <div className="form-control">
                <label className="label cursor-pointer justify-normal">
                  <input
                    type="radio"
                    name="LoginType"
                    value="Reader"
                    className="radio checked:bg-red-800 border border-red-400"
                    onChange={(e) => setInputs({ ...inputs, LoginType: e.target.value })}
                  />
                  <span className="label-text text mx-5 text-red-500">Reader</span>
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer justify-normal">
                  <input
                    type="radio"
                    name="LoginType"
                    value="Distributor"
                    className="radio checked:bg-blue-800 border border-blue-400"
                    onChange={(e) => setInputs({ ...inputs, LoginType: e.target.value })}
                  />
                  <span className="label-text mx-5 text-blue-500">Distributor</span>
                </label>
              </div>
            </div>
          </div>

          {/* Login Button */}
          <div className="justify-center flex my-4 ">
            <button className="btn btn-outline btn-block btn-info text-xl mb-5"
              disabled={loading}>
              {loading ? <span className='loading loading-spinner'></span> : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
