import React from 'react'

const LoginSignup = () => {
    return (
        <>
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                    <li>
                        <a className="justify-between">Login</a>
                    </li>
                    <li><a>Register as Reader</a></li>
                    <li><a>Register as Distributor</a></li>
                </ul>
            </div>
        </>
    )
}

export default LoginSignup