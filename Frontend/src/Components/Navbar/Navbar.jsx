import React from 'react'
import logo from "/Kitaabi Logo.jpg"
import { useAuthContext } from '../../Context/AuthContext'
import LoginSignup from './LoginSignup';
import ProfileInfo from './ProfileInfo';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const { authUser } = useAuthContext();
    return (
        <>
            <div className="navbar glass w-full bg-base-100 sticky top-0 z-30">
                <div className='flex-1 px-2 mx-2'>
                    <Link to={'/'}>
                        <img src={logo} className='h-16 rounded-full m-1 ring ring-white ring-offset-base-100 ring-offset-2'></img>
                    </Link>
                    <Link to={'/'} className=" font-bold btn btn-ghost text-white text-3xl hidden sm:block">KITAABI</Link>
                </div>

                {authUser ? <ProfileInfo /> : <LoginSignup />}
            </div>
        </>
    )
}

export default Navbar