import React from 'react'
import useLogout from '../Hooks/useLogout'

const Logout = () => {
    const {loding,logout} = useLogout();

  return (
    <div className='flex-none hidden lg:block justify-end px-3'>
    
    {!loding ? (
        <button className='text-md text-blue-200 label-base flex gap-3 label-text'
        onClick={logout}
        >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='w-4 h-4' fill="lightblue"><path d="M4 18H6V20H18V4H6V6H4V3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V18ZM6 11H13V13H6V16L1 12L6 8V11Z"></path></svg>
        Logout</button>
    ):(
        <span className='loading loading-spinner'></span>
    )}
    </div>
  );
};
export default Logout