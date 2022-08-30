import React from 'react'

const Story = ({data}) => {
  return (
    <div className='flex items-center'>
      <img src={data.urls.thumb} className='mr-2 h-[50px] w-[50px] shadow-sm' style={{borderRadius: "10px"}}/>
      <h1 className=' line-clamp-1'>{data.description || data.alt_description || data.user.first_name}</h1>
    </div>
  )
}

export default Story