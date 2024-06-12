import {useState, useEffect} from 'react'
import useLibrariesBooks from '../Zustand/useLibrariesBooks';

const useGetBooksforUser = () => {
    const [loading, setloading] = useState(false);
    const {selectedLibrary,Books,setBooks} = useLibrariesBooks();

    useEffect(() => {
        const getBooks = async () => {
            setloading(true);
            try {
                const res = await fetch(`/api/Books/getBooksforReader/${selectedLibrary._id}`);
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
        if(selectedLibrary?._id) getBooks();
    }, [selectedLibrary?._id,setBooks]);

    return { Books, loading };
}

export default useGetBooksforUser