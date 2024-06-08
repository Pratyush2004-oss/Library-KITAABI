import React, { useState } from 'react'
import useRegisterBook from '../../Hooks/useRegisterBook';
import DisplayBooks from './DisplayBooks';

const BooksRegistration = () => {
    const [inputs, setinputs] = useState({
        title: "",
        author: "",
        publication: '',
        description: ''
    });

    const { loading, bookregister } = useRegisterBook();
    const handleSubmit = async (e) => {
        e.preventDefault();
        await bookregister(inputs);
    }

    return (
        <>
            <div className='flex floe-col items-center justify-center min-w-96 mx-auto'>
                <div className="w-full p-6 rounded-lg shadow-md bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0">
                    <h1 className=' text-4xl font-semibold text-center text-gray-300 '> Register Your Books</h1>
                    <progress className="progress w-100 progress-success" value="100" max="100"></progress>

                    <form className='m-7' onSubmit={handleSubmit}>
                        <div className='sm:flex justify-between'>
                            <div className='w-screen lg:flex justify-evenly'>
                                <div className="my-1 mx-5">
                                    <label className="label item-center flex p-2">
                                        <span className=" text-xl text-white label-base flex gap-3 label-text">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="lightblue" className='w-7 h-7'><path d="M13 21V23.5L10 21.5L7 23.5V21H6.5C4.567 21 3 19.433 3 17.5V5C3 3.34315 4.34315 2 6 2H20C20.5523 2 21 2.44772 21 3V20C21 20.5523 20.5523 21 20 21H13ZM7 19V17H13V19H19V16H6.5C5.67157 16 5 16.6716 5 17.5C5 18.3284 5.67157 19 6.5 19H7ZM7 5V7H9V5H7ZM7 8V10H9V8H7ZM7 11V13H9V11H7Z"></path></svg>
                                            Book Title with Edition
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter Book Title"
                                        className="input input-bordered input-success w-full max-w-xs"
                                        value={inputs.title}
                                        onChange={(e) => setinputs({ ...inputs, title: e.target.value })}
                                        autoComplete="off" />
                                </div>
                                <div className="my-1 mx-5">
                                    <label className="label item-center flex p-2">
                                        <span className=" text-xl text-white label-base flex gap-3 label-text">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="lightblue" className='w-7 h-7'><path d="M17.8492 11.6983L17.1421 10.9912L7.24264 20.8907H3V16.648L14.3137 5.33432L19.9706 10.9912C20.3611 11.3817 20.3611 12.0149 19.9706 12.4054L12.8995 19.4765L11.4853 18.0622L17.8492 11.6983ZM15.7279 9.57696L14.3137 8.16274L5 17.4765V18.8907H6.41421L15.7279 9.57696ZM18.5563 2.50589L21.3848 5.33432C21.7753 5.72484 21.7753 6.35801 21.3848 6.74853L19.9706 8.16274L15.7279 3.9201L17.1421 2.50589C17.5327 2.11537 18.1658 2.11537 18.5563 2.50589Z"></path></svg>                                Author Name
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter Author of the Book"
                                        className="input input-bordered input-success w-full max-w-xs"
                                        value={inputs.author}
                                        onChange={(e) => setinputs({ ...inputs, author: e.target.value })}
                                        autoComplete="off" />
                                </div>
                            </div>
                            <div className='w-screen lg:flex justify-evenly'>
                                <div className="my-1 mx-5">
                                    <label className="label item-center flex p-2">
                                        <span className=" text-xl text-white label-base flex gap-3 label-text">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="lightblue" className='w-7 h-7'><path d="M21 19H23V21H1V19H3V4C3 3.44772 3.44772 3 4 3H14C14.5523 3 15 3.44772 15 4V19H17V9H20C20.5523 9 21 9.44772 21 10V19ZM7 11V13H11V11H7ZM7 7V9H11V7H7Z"></path></svg>
                                            Publication
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter Publication"
                                        className="input input-bordered input-success w-full max-w-xs"
                                        value={inputs.publication}
                                        onChange={(e) => setinputs({ ...inputs, publication: e.target.value })}
                                        autoComplete="off" />
                                </div>
                                <div className="my-1 mx-5">
                                    <label className="label item-center flex p-2">
                                        <span className=" text-xl text-white label-base flex gap-3 label-text">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="lightblue" className='w-7 h-7'><path d="M16 2L21 7V21.0082C21 21.556 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5447 3 21.0082V2.9918C3 2.44405 3.44495 2 3.9934 2H16ZM11 7V9H13V7H11ZM11 11V17H13V11H11Z"></path></svg>
                                            Description
                                        </span>
                                    </label>
                                    <textarea
                                        type="text"
                                        placeholder="Enter Description"
                                        className="input input-bordered input-success w-full max-w-xs"
                                        value={inputs.description}
                                        onChange={(e) => setinputs({ ...inputs, description: e.target.value })}
                                        autoComplete="off" />
                                </div>
                            </div>
                        </div>
                        <div className="justify-center flex my-4 mt-8 ">
                            <button className="btn btn-outline btn-block btn-success text-xl">
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <DisplayBooks />
        </>
    )
}

export default BooksRegistration