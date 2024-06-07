import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/Home/HomePage'
import SignupReader from './Pages/Signup/SignupReader'
import SignupDistributor from './Pages/Signup/SignupDistributor'
import Login from './Pages/Login/Login'
import { Toaster } from 'react-hot-toast'
import Navbar from './Components/Navbar'
import { useAuthContext } from './Context/AuthContext'
import HomePageReader from './Pages/Home/HomePageReader'
import HomePageDistributor from './Pages/Home/HomePageDistributor'

function App() {
  const { authUser } = useAuthContext();

  return (
    <div>
    <Navbar />
    <div className='h-screen'>
    <Routes>
          <Route path='/' element={authUser ? ((authUser.LoginType === "Reader") ? <Navigate to={'/HomeReader'} /> : <Navigate to={"/HomeDistributor"} />)  : <HomePage/>} />
          <Route path='/HomeReader' element={authUser ? ((authUser.LoginType === "Reader") ? <HomePageReader /> : <Navigate to={"/HomeDistributor"} />) : <Navigate to={"/"} />} />
          <Route path='/HomeDistributor' element={authUser ? ((authUser.LoginType === "Distributor") ? <HomePageDistributor /> : <Navigate to={"/HomeReader"} />) : <Navigate to={'/'} />} ></Route>
          </Routes>
        <div className={`Registrationbody flex items-center w-screen justify-center ${(!authUser) ? "py-10" : ""}`}>
        <Routes>
        <Route path="/registerReader" element={authUser ? ((authUser.LoginType === "Reader") ? <Navigate to={'/HomeReader'} /> : <SignupReader />) : <SignupReader />} />
        <Route path="/registerDistributor" element={authUser ? ((authUser.LoginType === "Distributor") ? <Navigate to={'/HomeDistributor'} /> : <SignupDistributor />) : <SignupDistributor />} />
        <Route path="/Login" element={authUser ? ((authUser.LoginType === "Reader") ? <Navigate to={'/HomeReader'} /> : <Navigate to={"/HomeDistributor"} />) : <Login />} />
        </Routes>
        <Toaster />
        </div>
        </div>
      </div>
        )
}

export default App
