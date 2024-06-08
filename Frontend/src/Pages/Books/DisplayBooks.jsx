import React, { useState } from 'react'
import useGetBooks from '../../Hooks/useGetBooks'

const DisplayBooks = () => {
    const { Books } = useGetBooks();
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th scope='col' className='text-lg text-center border col'>Sr no.</th>
                        <th scope='col' className='text-lg text-center border '>Book title</th>
                        <th scope='col' className='text-lg text-center border '>Author</th>
                        <th scope='col' className='text-lg text-center border '>Publication</th>
                        <th scope='col' className='text-lg text-center border '>Description</th>
                    </tr>
                </thead>
                <tbody className='border'>
                    {Books.map((book, idx) => {
                        return (
                            <tr className='hover'>
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
        </div>
    )
}

export default DisplayBooks