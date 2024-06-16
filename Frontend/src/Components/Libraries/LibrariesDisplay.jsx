import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import useLibrariesBooks from '../../Zustand/useLibrariesBooks'

const LibrariesDisplay = ({ Libraries }) => {
    const { selectedLibrary, setSelectedLibrary } = useLibrariesBooks();
    const isSelected = selectedLibrary?._id === Libraries._id;

    return (
        <div className={`${isSelected ? "bg-gray-800" : ""}`}>
            <div className="card card-side bg-base-100 m-5 shadow-xl">
                <figure><img src={Libraries.ProfilePic} alt="" className=' h-80' /></figure>
                <div className={`card-body`}>
                    <h2 className={`card-title font-bold text-2xl`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-7 w-7" fill="lightblue"><path d="M2 19V8H1V6H4V4C4 3.44772 4.44772 3 5 3H19C19.5523 3 20 3.44772 20 4V6H23V8H22V19H23V21H1V19H2ZM13 19V12H11V19H13ZM8 19V12H6V19H8ZM18 19V12H16V19H18ZM6 5V6H18V5H6Z"></path></svg>
                        {Libraries.LibraryName}</h2>
                    <p>{"Library Address : " + Libraries.Address}</p>
                    <p>{"City : " + Libraries.City.charAt(0).toUpperCase() + Libraries.City.slice(1)}</p>
                    <p>{"Contact Number : " + Libraries.Mobile}</p>
                    <p>{"Mail : " + Libraries.email}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary" key={Libraries._id}
                            onClick={() => setSelectedLibrary(Libraries)}
                        ><Link to={'/GetBooksforReader'}>View Books</Link></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LibrariesDisplay