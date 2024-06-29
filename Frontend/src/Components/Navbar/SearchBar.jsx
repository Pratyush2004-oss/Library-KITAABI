import React from 'react'
import { IoSearch } from 'react-icons/io5';

const SearchBar = ({onSearchInput}) => {
    return (
        <>
            {/* Search Bar for the Books user want to search */}
            <label className='p-8 input input-bordered flex rounded-full items-center gap-2'>
                <input
                    type="text"
                    placeholder="Search the Book by Title or Author"
                    className="grow"
                    onChange={(e) => onSearchInput(e.target.value)}
                />
                <IoSearch className='w-6 h-7 outline-none' type='submit' />
            </label>
        </>
    )
}

export default SearchBar