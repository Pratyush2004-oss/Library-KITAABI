import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const useGetBooks = () => {
    const [loading, setloading] = useState(false);
    const [Books, setBooks] = useState([])

    useEffect(() => {
        const getBooks = async () => {
            setloading(true);
            try {
                const res = await fetch('/api/Books/getBooks');
                const data = await res.json();

                if (data.error) {
                    throw new Error(data.error)
                }
                setBooks(data)
            } catch (error) {
                toast.error(error.message);
            }
            finally {
                setloading(false)
            }
        }
        getBooks();
    }, []);

    return { Books, loading };
}

export default useGetBooks