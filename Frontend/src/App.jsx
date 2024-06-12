import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/Home/HomePage'
import SignupReader from './Pages/Signup/SignupReader'
import SignupDistributor from './Pages/Signup/SignupDistributor'
import Login from './Pages/Login/Login'
import { Toaster } from 'react-hot-toast'
import Navbar from './Components/Navbar/Navbar'
import { useAuthContext } from './Context/AuthContext'
import HomePageReader from './Pages/Home/HomePageReader'
import HomePageDistributor from './Pages/Home/HomePageDistributor'
import BooksRegistration from './Pages/Books/BooksRegistration'
import AccountInfo from './Pages/Home/AccountInfo'
import BookInfoReader from './Components/Libraries/BookInfoReader'
import useLibrariesBooks from './Zustand/useLibrariesBooks'

function App() {
  const { authUser } = useAuthContext();
  const {selectedLibrary} = useLibrariesBooks();

  return (
    <div>
      <div className='h-screen'>
        <Navbar />
        <Routes>
          <Route path='/HomeReader' element={authUser ? ((authUser.LoginType === "Reader") ? <HomePageReader /> : <Navigate to={"/HomeDistributor"} />) : <Navigate to={"/"} />} />
          <Route path='/HomeDistributor' element={authUser ? ((authUser.LoginType === "Distributor") ? <HomePageDistributor /> : <Navigate to={"/HomeReader"} />) : <Navigate to={'/'} />} ></Route>
          <Route path='/RegisterBooks' element={authUser ? ((authUser.LoginType === "Distributor") ? <BooksRegistration /> : <Navigate to={'/'} />) : <Navigate to={'/'} />} />
          <Route path='/Account' element={authUser ? <AccountInfo /> : <Navigate to={'/'} />} />
          <Route path='/GetBooksforReader' element={authUser? ((selectedLibrary === null) ? <Navigate to={'/'}/> : <BookInfoReader/>) : <Navigate to={'/'}/>}/>
        </Routes>
        <div className={`flex items-center w-screen justify-center ${(!authUser) ? "py-10" : ""}`}>
          <Routes>
            <Route path='/' element={authUser ? ((authUser.LoginType === "Reader") ? <Navigate to={'/HomeReader'} /> : <Navigate to={"/HomeDistributor"} />) : <HomePage />} />
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
