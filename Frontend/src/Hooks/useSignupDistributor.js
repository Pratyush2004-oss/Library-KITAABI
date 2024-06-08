import { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../Context/AuthContext';

const useSignupDistributor = () => {
    const [loading, setLoading] = useState(false);
    const {setauthUser} = useAuthContext();


    const distributorsignup = async ({ LibraryName, email, Mobile, Address, City, Password, ConfirmPassword }) => {

        const success = handleInputErrors({ LibraryName, email, Mobile, Address,  City, Password, ConfirmPassword })
        if (!success) return;
        
        setLoading(true);
        try {
            const res = await fetch("/api/auth/signupDistributor", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ LibraryName, email, Address, Mobile, City, Password, ConfirmPassword })
            });
            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }
            // Localstorage
            localStorage.setItem("Library", JSON.stringify(data));

            // Context
            setauthUser(data);

        } catch (error) {
            toast.error(error.message);
        }
        finally {
            setLoading(false);
        }
    }
    return { loading, distributorsignup }
}


export default useSignupDistributor

function handleInputErrors({LibraryName, email, Mobile, Address, City, Password, ConfirmPassword}){
    if(!LibraryName || !email || !Address || !Mobile || !City || !Password || !ConfirmPassword ){
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