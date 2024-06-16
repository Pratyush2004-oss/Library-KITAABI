import React from 'react'
import toast from 'react-hot-toast';
import UseGetBooksForUsersCity from '../../Hooks/UseGetBooksForUsersCity';
import { IoSearch } from 'react-icons/io5';

const SearchBar = () => {

    const [search, setSearch] = useState('');
    const { Books } = UseGetBooksForUsersCity();
    const handleSearch = (e) => {
        e.preventDefault();
        if (!search) return;

        if (search.length < 3) {
            return toast.error('Search term must be at least 3 character long.');
        }
        // Searching the Book we want
        const book = Books.find((c) => c.title.toLowerCase().includes(search.toLowerCase()));

        if (book) {
            setSearch('');
        }
        else toast.error("No Books Found!...");
    }
    return (
        <>
            {/* Search Bar for the Books user want to search */}
            < form className="form-control" onSubmit={handleSearch} >
                <label className='input input-bordered flex rounded-full items-center gap-2'>
                    <input
                        type="text"
                        placeholder="Search the Book"
                        className="grow"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button>
                        <IoSearch className='w-6 h-7 outline-none' type='submit' />
                    </button>
                </label>
            </form >
        </>
    )
}

export default SearchBar