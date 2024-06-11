import React from 'react'
import { Link } from 'react-router-dom';

const LibrariesDisplay = ({ Libraries }) => {

    return (
        <div className=''>
            <div className="card card-side bg-base-100 m-5 shadow-xl">
                <figure><img src={Libraries.ProfilePic} alt="" className=' h-80' /></figure>
                <div className={`card-body`}>
                    <h2 className={`card-title font-bold text-2xl`}>{Libraries.LibraryName}</h2>
                    <p>{"Library Address : " + Libraries.Address}</p>
                    <p>{"City : " + Libraries.City}</p>
                    <p>{"Contact Number : " + Libraries.Mobile}</p>
                    <p>{"Mail : " + Libraries.email}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary" key={Libraries._id}
                        >View Books</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LibrariesDisplay