import React from 'react'

const RightCardContent = (props) => {
  return (
        <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
        <h2 className='bg-white rounded-full h-11 w-11 flex justify-center items-center text-xl font-bold'>{props.id+1}</h2>
        <div>
          <p className='text-xl leading-relaxed text-white mb-8'>{props.intro} </p>
          <div className='flex justify-between'>
          <button className='h-11 px-6 bg-blue-600 text-white font-medium rounded-full flex items-center justify-center'>
  {props.tag}
</button>

<button className='h-11 w-11 bg-blue-600 text-white rounded-full flex items-center justify-center'>
  <i className="ri-arrow-right-line"></i>
</button>

          </div>
        </div>
      </div>
  )
}

export default RightCardContent