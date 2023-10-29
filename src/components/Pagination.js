import React, { useContext, useEffect } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {

    const {page, setPage, totalPage, fetchData} = useContext(AppContext)

    useEffect( () => {
        fetchData();
    }, [page])

  return (
    <div className='w-full flex flex-wrap justify-center fixed bottom-0 bg-white border-t-2 border-black border-opacity-20 py-2 shadow-2xl'>

        <div className='w-[650px] max-w-[90%] flex flex-wrap justify-between items-center'>

            <div className='flex gap-x-2'>

                {
                    page > 1 && 
                    <button onClick={() => setPage(page - 1)} className='border-2 border-black border-opacity-20 rounded py-1 px-4 shadow-md text-[17px]'>
                        Previous
                    </button>
                }

                {
                    page !== totalPage && 
                    <button onClick={() => setPage(page+1)} className='border-2 border-black border-opacity-20 rounded py-1 px-4 shadow-md text-[17px]'>
                        Next
                    </button>
                }

            </div>

            <div className='text-sm font-bold'>
                {
                    `Page ${page} of ${totalPage}`
                }
            </div>


        </div>

        
    </div>
  )
}

export default Pagination