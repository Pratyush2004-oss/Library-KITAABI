import React from 'react'
import useGetBooks from '../../Hooks/useGetBooks'

const DisplayBooks = () => {
    const { Books, loadiing } = useGetBooks();
    return (
        <div className="overflow-x-auto h-96">
            <table className="table">
                {/* head */}
                <thead className='sticky top-0 z-10 bg-gray-900 '>
                    <tr>
                        <th scope='col' className='text-xl text-center border col'>Sr no.</th>
                        <th scope='col' className='text-xl text-center border '>Book title</th>
                        <th scope='col' className='text-xl text-center border '>Author</th>
                        <th scope='col' className='text-xl text-center border '>Publication</th>
                        <th scope='col' className='text-xl text-center border '>Description</th>
                    </tr>
                </thead>
                <tbody className='border z-0'>
                    {Books.map((book, idx) => {
                        return (
                            <tr className='hover' key={book._id}>
                                <th scope='row' className='text-xl border-x text-center col'>{idx + 1}</th>
                                <td className='text-lg border-x text-center'>{book.title}</td>
                                <td className='text-lg border-x text-center'>{book.author}</td>
                                <td className='text-lg border-x text-center'>{book.publication}</td>
                                <td className='text-lg border-x text-center'>{book.description}</td>
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