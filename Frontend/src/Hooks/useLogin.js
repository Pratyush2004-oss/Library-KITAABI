import { useState } from "react"
import { useAuthContext } from "../Context/AuthContext";
import toast from "react-hot-toast";


const useLogin = () => {
    const [loading, setloading] = useState(false);
    const { setauthUser } = useAuthContext();

    const Login = async ({ email, Password, LoginType }) => {

        const success = handleinputErrors({email,Password,LoginType});
        if(!success) return;

        setloading(true);
        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, Password, LoginType })
            })
            const data = await res.json();
            if (data.error) {
                throw new Error(data.error)
            }

            // localstorage
            localStorage.setItem("Library", JSON.stringify(data))

            // context 
            setauthUser(data);


        } catch (error) {
            toast.error(error.message)

        }
        finally {
            setloading(false);
        }
    }
    return { loading, Login };
}

export default useLogin

function handleinputErrors({email,Password,LoginType}){
    if (!email || !Password || !LoginType) {
        toast.error('Fill-in all feilds..')
        return false
    }
    return true
}