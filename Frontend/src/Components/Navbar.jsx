import React from 'react'
import logo from "/Kitaabi Logo.jpg"
import { useAuthContext } from '../Context/AuthContext'
import Logout from './Logout';
import LoginSignup from './LoginSignup';
import LoginSignupSide from './LoginSignupSide';

const Navbar = () => {
    const { authUser } = useAuthContext();
    return (
        <>
            <div className="drawer drawer-end">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="w-full glass navbar bg-base-300">
                        <div className='flex-1 px-2 mx-2'>
                            <img src={logo} className='h-16 rounded-full m-1 ring ring-white ring-offset-base-100 ring-offset-2'></img>
                            <a className=" font-bold btn btn-ghost text-white text-3xl">KITAABI</a>
                        </div>
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        {authUser ? <Logout /> : <LoginSignup />}
                    </div>
                </div>
                {authUser ? <Logout /> : <LoginSignupSide />}

            </div>
        </>
    )
}

export default Navbar