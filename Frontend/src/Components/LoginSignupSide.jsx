import React from 'react'

const LoginSignupSide = () => {
    return (
        <div className="drawer-side">
            <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200">
                {/* Sidebar content here */}
                <li><a className="btn btn-ghost rounded-btn text-sm">Login</a></li>
                <li><a className="btn btn-ghost rounded-btn text-sm">Signup Reader</a></li>
                <li><a className="btn btn-ghost rounded-btn text-sm">Signup Distributor</a></li>
            </ul>
        </div>
    )
}

export default LoginSignupSide