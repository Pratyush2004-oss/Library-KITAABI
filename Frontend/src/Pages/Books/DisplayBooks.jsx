import React from 'react'
import useGetBooks from '../../Hooks/useGetBooks'

const DisplayBooks = () => {
    const { Books, loadiing } = useGetBooks();
    return (
        <div className="overflow-x-auto h-96">
            <table className="table table-fixed w-100">
                {/* head */}
                <thead className='sticky top-0 z-10 bg-gray-900 '>
                    <tr>
                        <th scope='col' className='text-xl text-center border sm:w-28 col'><span className='line-clamp-1'>Sr no.</span></th>
                        <th scope='col' className='text-xl text-center border '><span className='line-clamp-1'>Book title</span></th>
                        <th scope='col' className='text-xl text-center border '><span className='line-clamp-1'>Author</span></th>
                        <th scope='col' className='text-xl text-center border '><span className='line-clamp-1'>Publication</span></th>
                        <th scope='col' className='text-xl text-center border '><span className='line-clamp-1'>Description</span></th>
                    </tr>
                </thead>
                <tbody className='border z-0'>
                    {Books.map((book, idx) => {
                        return (
                            <tr className='hover' key={book._id}>
                                <th scope='row' className='text-xl border-x text-center sm:w-28 col'>{idx + 1}</th>
                                <td className='text-lg border-x text-center'><span className='line-clamp-1'>{book.title}</span></td>
                                <td className='text-lg border-x text-center'><span className='line-clamp-1'>{book.author}</span></td>
                                <td className='text-lg border-x text-center'><span className='line-clamp-1'>{book.publication}</span></td>
                                <td className='text-lg border-x text-center'><span className='line-clamp-1'>{book.description}</span></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            {loadiing ? (<span className='loading loading-spinner mx-auto'></span>) : null}
        </div>
    )
}

export default DisplayBooks