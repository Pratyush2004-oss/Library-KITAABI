import React from 'react'

const Books = () => {
    return (
        <div className="card m-5 p-5 w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
        </div>
    )
}

export default Books