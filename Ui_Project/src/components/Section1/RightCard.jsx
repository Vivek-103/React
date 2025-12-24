import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='group relative shrink-0 h-full w-60 bg-red-400 rounded-4xl overflow-hidden transition-transform duration-300 hover:scale-105'>

     <img className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110' src={props.img} />

      <RightCardContent id={props.id} tag={props.tag} intro={props.intro}/>
    </div>
  )
}

export default RightCard