import React, { useEffect } from 'react'
import Books from './Books'

const BookInfoReader = () => {
    return (
        <>
            <div className='bg-gray-800 py-7'>
                <h1 className='text-7xl font-semibold text-center mb-3 text-gray-300'>Library name</h1>
                <progress className="progress w-100 progress-gray" value="100" max="100"></progress>
            </div>
            <div className='flex flex-wrap justify-evenly p-5 bg-gray-800'>
                <Books/>
                <Books/>
                <Books/>
                <Books/>
                <Books/>
            </div>
        </>
    )
}

export default BookInfoReader