import React, { useState } from 'react'
import { useAuthContext } from '../Context/AuthContext';
import toast from 'react-hot-toast';

const useLogout = () => {
    const [loading, setLoading] = useState(false);
    const { setauthUser } = useAuthContext();

    const logout = async () => {
        setLoading(true);
        try {
            const res = await fetch("api/auth/logout", {
                method: "POST",
                headers: { "Content-Type": "appliction/json" }
            });
            const data = await res.json();
            if (data.error) {
                throw new Error(data.error)
            }
            localStorage.removeItem("Library");
            setauthUser(null);
        } catch (error) {
            toast.error(error.message);
        }
        finally {
            setLoading(false);
        }
    }
    return { loading, logout };
}

export default useLogout