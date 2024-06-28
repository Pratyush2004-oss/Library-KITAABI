import React, { useEffect, useState } from 'react'
import BookSearch from './BookSeearch';
import UseGetBooksForUsersCity from '../../Hooks/UseGetBooksForUsersCity';
import { useAuthContext } from '../../Context/AuthContext';
import SearchBar from '../Navbar/SearchBar';

const GetCityBooks = () => {
    const { authUser } = useAuthContext();
    const { Books, loading } = UseGetBooksForUsersCity();
    const [search, setSearch] = useState();
    const BookList = Books;
    useEffect(() => {

    }, [search])
    return (
        <>
            <div className='bg-gray-800 py-7'>
                <h1 className='text-7xl font-semibold text-center mb-3 text-gray-300'>Books in your City <span className='text-xl'>({authUser.City.charAt(0).toUpperCase() + authUser.City.slice(1)})</span></h1>
                <progress className="progress w-100 progress-gray" value="100" max="100"></progress>
            </div>
            <div className='bg-gray-800'>
                <SearchBar onSearchInput={(e) => setSearch(e)} />
            </div>

            <div className='flex flex-wrap justify-evenly p-5 bg-gray-800'>
                {!loading && Books.length === 0 && (
                    <p className='text-center'>No Books found ...... </p>
                )}
                {loading && (<span className='loading loading-spinner mx-auto'></span>)}
                {!loading && Books.length > 0 && Books.map((book) => (
                    <BookSearch
                        key={book._id}
                        book={book}
                    />
                ))}
            </div>
        </>
    )
}

export default GetCityBooks