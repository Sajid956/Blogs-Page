import React from 'react'

const Card = ({content}) => {
  return (
    <div className='w-[650px] max-w-[90%] flex flex-col flex-wrap'>
        
        <h2 className='text-lg font-bold '>{content.title}</h2>

        <p className='text-sm mt-1'>By <span className='italic'>{content.author}</span> on <span className='font-bold underline'>{content.category}</span></p>
        <p className='text-sm mt-1'>Posted On <span>{content.date}</span></p>

        <p className='mt-4 mb-2'>{content.content}</p>

        <p className='flex gap-x-2 flex-wrap'>
            {
                content.tags.map( (tag, index) => (
                    <span className='text-xs text-blue-700 underline cursor-pointer font-bold' key={index}>#{tag} </span>
                ))
            }
        </p>

    </div>
  )
}

export default Card