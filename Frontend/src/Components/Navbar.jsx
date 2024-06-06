import React from 'react'
import logo from "/Kitaabi Logo.jpg"
import { useAuthContext } from '../Context/AuthContext'
import Logout from './Logout';
import LoginSignup from './LoginSignup';

const Navbar = () => {
    const { authUser } = useAuthContext();
    return (
        <>
        <div className="navbar glass bg-base-100">
        <div className='ml-5'>
        <img src={logo} className='h-16 rounded-full m-1 ring ring-white ring-offset-base-100 ring-offset-2'></img>
        <a className=" font-bold btn btn-ghost text-white text-3xl">KITAABI</a>
        </div>
        {authUser ? <div className='mr-7 ml-auto'><Logout /></div> :<LoginSignup/>
    }
    </div>
    </>
    )
}

export default Navbar