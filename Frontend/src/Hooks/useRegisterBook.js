import { useState } from 'react'
import toast from 'react-hot-toast';

const useRegisterBook = () => {
    const [loading, setloading] = useState(false);

    const bookregister = async ({ title, author, publication, description }) => {
        const success = handleInputErrors({ title, author, publication, description });
        if (!success) return;

        setloading(true);
        try {
            const res = await fetch("/api/Books/registerBooks", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ title,author,publication,description })
            });

            const Bookdata = await res.json();
            if (Bookdata.error) {
                throw new Error(Bookdata.error);
            }
            toast.success("Book Inserted Successfully");

        } catch (error) {
            toast.error(error.message)
        }
        finally {
            setloading(false)
        }
    }
    return { loading, bookregister }
}

export default useRegisterBook

function handleInputErrors({ title, author, publication, description }) {
    if (!title || !author || !publication || !description) {
        toast.error("Fill-in all feilds..");
        return false;
    }
    return true;
}