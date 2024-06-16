import React, { useEffect } from 'react'
import Book from './Book'
import useLibrariesBooks from '../../Zustand/useLibrariesBooks'
import useGetBooksforUser from '../../Hooks/useGetBooksforUser';

const BookInfoReader = () => {
    const { selectedLibrary } = useLibrariesBooks();
    const { Books, loading } = useGetBooksforUser();
    return (
        <>
            <div className='bg-gray-800 py-7'>
                <h1 className='text-7xl font-semibold text-center mb-3 text-gray-300'>{selectedLibrary.LibraryName} <span className='text-xl'>({selectedLibrary.Address})</span></h1>
                <progress className="progress w-100 progress-gray" value="100" max="100"></progress>
            </div>
            <div className='flex flex-wrap justify-evenly p-5 bg-gray-800'>
                {selectedLibrary &&
                    <>
                        {!loading && Books.length === 0 && (
                            <p className='text-center'>Library has not registered their Books..<br /> Wait for them to register the Books</p>
                        )}
                        {loading && (<span className='loading loading-spinner mx-auto'></span>)}
                        {!loading && Books.length > 0 && Books.map((book) => (
                            <Book
                                key={book._id}
                                book={book}
                            />
                        ))}
                    </>
                }
            </div>
        </>
    )
}

export default BookInfoReader