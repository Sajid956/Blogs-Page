import React, { useContext, useEffect } from 'react'
import { AppContext } from '../context/AppContext'
import Card from './Card';
import Spinner from './Spinner';

const MainContent = () => {

    const {blogs, loading, fetchData} = useContext(AppContext);

    useEffect( () => {
        fetchData();
    },[])

  return (
    <div className={`w-full flex flex-wrap flex-col items-center gap-y-10 ${loading ? '' : 'mt-24 mb-28'} `}>
        {
            loading ? (<Spinner />) : 
            (
                blogs.map( (blog) => (
                    <Card key={blog.id} content={blog} />
                ))
            )
            
        }
    </div>
  )
}

export default MainContent