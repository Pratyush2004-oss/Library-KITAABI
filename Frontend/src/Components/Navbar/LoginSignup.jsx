import React from 'react'
import { Link } from 'react-router-dom'

const LoginSignup = () => {
    return (
        <>
            <div className="dropdown dropdown-hover dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="rounded-full">

                        {/* hamburger icon */}
                        <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>
                    </div>
                </div>
                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                    <li>
                        <Link to={'/login'} className="justify-between">Login</Link>
                    </li>
                    <li><Link to={'/registerReader'}>Register as Reader</Link></li>
                    <li><Link to={'/registerDistributor'}>Register as Distributor</Link></li>
                </ul>
            </div>
        </>
    )
}

export default LoginSignup