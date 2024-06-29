import React from 'react'
import useGetLibrariesforReader from '../../Hooks/useGetLibrariesReaderjs'
import LibrariesDisplay from '../../Components/Libraries/LibrariesDisplay';

const HomePageReader = () => {
  const {Libraries,loading} = useGetLibrariesforReader();
  return (
    <>
      <div className='bg-gray-800 py-7'>
        <h1 className='text-7xl font-semibold text-center mb-3 text-gray-300'>Libraries in your City</h1>
        <progress className="progress w-100 progress-gray" value="100" max="100"></progress>
      </div>
      <div className='grid grid-cols-1 xl:grid-cols-2 p-8 bg-gray-800'>
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

export default HomePageReader