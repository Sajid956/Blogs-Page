import React from 'react'

const Spinner = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center gap-y-4'>
        <div className='custom-loader mr-4'></div>
        <h1 className='text-2xl font-bold'>Loading...</h1>
    </div>
  )
}

export default Spinner