import React, { useEffect, useState } from 'react'
import { useAuthContext } from '../Context/AuthContext';
import toast from 'react-hot-toast';

const UseGetBooksForUsersCity = () => {
    const [loading, setLoading] = useState(false);
    const [Books, setBooks] = useState([]);
    const { authUser } = useAuthContext();

    useEffect(() => {
        const GetBooks = async () => {
            try {
                if (authUser.LoginType === "Distributor") {
                    const res = await fetch('/api/Books/getBooksbyCityDistributor');
                    const data = await res.json();

                    if (data.error) {
                        throw new Error(data.error)
                    }
                    setBooks(data)
                }
                else {
                    const res = await fetch('/api/Books/getBooksbyCityReader');
                    const data = await res.json();

                    if (data.error) {
                        throw new Error(data.error)
                    }
                    setBooks(data);
                }
            }
            catch (error) {
                toast.error(error.message)
            }
            finally {
                setLoading(false);
            }
        }
        GetBooks();
    }, [])
    return { Books, loading };
}

export default UseGetBooksForUsersCity