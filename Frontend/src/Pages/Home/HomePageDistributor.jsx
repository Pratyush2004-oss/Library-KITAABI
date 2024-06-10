import React from 'react'
import useGetLibrariesforDistributor from '../../Hooks/useGetLibrariesDistributor'
import LibrariesDisplay from '../../Components/Libraries/LibrariesDisplay';


const HomePageDistributor = () => {
  const { Libraries,loading } = useGetLibrariesforDistributor();
  return (
    <>
      <div className='bg-gray-800 py-7'>
        <h1 className='text-7xl font-semibold text-center mb-3 text-gray-300'>Libraries in your City</h1>
        <progress className="progress w-100 progress-gray" value="100" max="100"></progress>
      </div>
      <div className='flex flex-wrap justify-evenly p-5 bg-gray-800'>
        {Libraries.map((Libraries) => (
          <LibrariesDisplay
            key={Libraries._id}
            Libraries={Libraries}
          />
        ))}

        {loading ? (<span className='loading loading-spinner mx-auto'></span>) : null}
      </div>
    </>
  )
}

export default HomePageDistributor