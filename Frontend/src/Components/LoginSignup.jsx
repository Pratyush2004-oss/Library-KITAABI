import React from 'react'

const LoginSignup = () => {
    return (
        <>
            <div className="flex-none hidden lg:block">
                <ul className='menu menu-horizontal'>
                    {/*Navbar  Menu Content Here */}
                    <li><a className="btn btn-ghost rounded-btn text-sm">Login</a></li>
                    <li><a className="btn btn-ghost rounded-btn text-sm">Signup Reader</a></li>
                    <li><a className="btn btn-ghost rounded-btn text-sm">Signup Distributor</a></li>
                </ul>
            </div>

        </>
    )
}

export default LoginSignup