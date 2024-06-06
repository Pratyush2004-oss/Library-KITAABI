import { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../Context/AuthContext';

const useSignupReader = () => {
  const [loading, setLoading] = useState(false);
  const {setauthUser} = useAuthContext();

  const readerSignup = async ({ fullname, email, AadharNumber, Mobile, City, Password, ConfirmPassword }) => {
    const success = handleInputErrors({fullname, email, AadharNumber, Mobile, City, Password, ConfirmPassword})
    if(!success) return;
    setLoading(true);
    try {
      const res = await fetch("/api/auth/signupReader", {
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify({fullname, email, AadharNumber, Mobile, City, Password, ConfirmPassword})
      });
      const data = await res.json();
      if(data.error) {
        throw new Error(data.error);
      }
      // Localstorage
      localStorage.setItem("Library",JSON.stringify(data));

      // Context
      setauthUser(data)
      
    } catch (error) {
      toast.error(error.message);
    }
    finally{
      setLoading(false);
    }
  }
  return { loading, readerSignup };
};

export default useSignupReader

function handleInputErrors({fullname, email, AadharNumber, Mobile, City, Password, ConfirmPassword}){
  if(!fullname || !email || !AadharNumber || !Mobile || !City || !Password || !ConfirmPassword ){
    toast.error("Fill-in all feilds..");
    return false;
  }
  if(Password !== ConfirmPassword){
    toast.error('Passwords do not match');
    return false;
  }
  if(Password.length < 8){
    toast.error('Password should be atleast 8 characters long')
    return false;
  }
  return true;

}