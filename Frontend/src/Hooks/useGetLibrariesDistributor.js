import { useEffect, useState } from "react"
import toast from 'react-hot-toast'

const useGetLibrariesforDistributor = () => {
    const [loading,setloading] = useState(false);
    const [Libraries,setLibraries] = useState([])

    useEffect(() => {
        const getLibraries = async () => {
            setloading(true);
            try {
                const res = await fetch('/api/Libraries/LibrariesDistributor');
                const data = await res.json();
                
                if (data.error){
                    throw new Error(data.error);
                }
                setLibraries(data);
            } catch (error) {
                toast.error(error.message)
            }
            finally{
                setloading(false);
            }
        }
        getLibraries();
    },[]);
    return {Libraries,loading};
}
export default useGetLibrariesforDistributor