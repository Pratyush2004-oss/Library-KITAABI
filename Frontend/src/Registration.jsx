import React from 'react'
import SignupReader from './Pages/Signup/SignupReader'
import Navbar from './Components/Navbar'
import SignupDistributor from './Pages/Signup/SignupDistributor'
import Login from './Pages/Login/Login'
import { Route, Routes } from 'react-router-dom'

const Registration = () => {
  return (
    <div className='h-screen'>
      <Navbar />
      <div className='p-4 flex items-center w-screen justify-center'>
      </div>
    </div>
  )
}

export default Registration