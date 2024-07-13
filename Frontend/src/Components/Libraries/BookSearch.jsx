import React from 'react'

const BookSearch = ({ book }) => {
    return (
        <>
            <div className="hover:scale-105 card mx-auto my-5 w-[420px] bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={"https://th.bing.com/th/id/OIP.s6qkxOqsGKB_7JnvbKujWAHaE2?rs=1&pid=ImgDetMain"} alt="" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <div className='flex'>
                        <h2 className="card-title text-lg font-bold m-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="lightblue" className='w-7 h-7'><path d="M13 21V23.5L10 21.5L7 23.5V21H6.5C4.567 21 3 19.433 3 17.5V5C3 3.34315 4.34315 2 6 2H20C20.5523 2 21 2.44772 21 3V20C21 20.5523 20.5523 21 20 21H13ZM7 19V17H13V19H19V16H6.5C5.67157 16 5 16.6716 5 17.5C5 18.3284 5.67157 19 6.5 19H7ZM7 5V7H9V5H7ZM7 8V10H9V8H7ZM7 11V13H9V11H7Z"></path></svg>
                        </h2>
                        <h2 className='card-title text-3xl font-bold m-2'>{book.title}</h2>
                    </div>
                    <div className='flex'>
                        <p className='text-xl card-title font-semibold m-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="lightblue" className='w-7 h-7'><path d="M17.8492 11.6983L17.1421 10.9912L7.24264 20.8907H3V16.648L14.3137 5.33432L19.9706 10.9912C20.3611 11.3817 20.3611 12.0149 19.9706 12.4054L12.8995 19.4765L11.4853 18.0622L17.8492 11.6983ZM15.7279 9.57696L14.3137 8.16274L5 17.4765V18.8907H6.41421L15.7279 9.57696ZM18.5563 2.50589L21.3848 5.33432C21.7753 5.72484 21.7753 6.35801 21.3848 6.74853L19.9706 8.16274L15.7279 3.9201L17.1421 2.50589C17.5327 2.11537 18.1658 2.11537 18.5563 2.50589Z"></path></svg>
                            Author : </p>
                        <p className='card-title text-lg font-bold m-2'>{book.author}</p>
                    </div>
                    <div className='flex'>
                        <p className='text-lg card-title font-semibold m-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="lightblue" className='w-7 h-7'><path d="M21 19H23V21H1V19H3V4C3 3.44772 3.44772 3 4 3H14C14.5523 3 15 3.44772 15 4V19H17V9H20C20.5523 9 21 9.44772 21 10V19ZM7 11V13H11V11H7ZM7 7V9H11V7H7Z"></path></svg>
                            Publication : </p>
                        <p className='card-title text-lg font-bold m-2'>{book.publication}</p>
                    </div>
                    <div className='flex'>
                        <p className='text-lg card-title m-2 font-semibold'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="lightblue" className='w-7 h-7'><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 7H13V9H11V7ZM11 11H13V17H11V11Z"></path></svg>                        
                        </p>
                        <p className='card-title text-lg font-bold m-2 line-clamp-1'>{book.description}</p>
                    </div>
                    <div className='flex'>
                        <p className='text-lg card-title font-semibold m-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-7 w-7" fill="lightblue"><path d="M2 19V8H1V6H4V4C4 3.44772 4.44772 3 5 3H19C19.5523 3 20 3.44772 20 4V6H23V8H22V19H23V21H1V19H2ZM13 19V12H11V19H13ZM8 19V12H6V19H8ZM18 19V12H16V19H18ZM6 5V6H18V5H6Z"></path></svg>
                        </p>
                        <p className='card-title text-lg font-bold m-2'>Library Name : {book.LibraryName}</p>
                    </div>
                    <div className='flex'>
                        <p className='text-lg card-title font-semibold m-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7" fill="lightblue"><path d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z"></path></svg>
                        </p>
                        <p className='card-title text-lg font-bold m-2'>Address : {book.Address}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BookSearch