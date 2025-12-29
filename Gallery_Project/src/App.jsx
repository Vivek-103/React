import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  const [userData, setUserData] = useState([]);

  const [index, setIndex] = useState(1)

  
  const getData = async() =>{
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=15`)
    setUserData(response.data)
  }
  
  useEffect(function(){
    getData();
  },[index])
  

  let printUserData = <h3 className='text-gray-400'>No User Available</h3>
  if(userData.length>0){
    printUserData = userData.map(function(elem , idx){

      return <div key={idx}>
        <a href={elem.url} target='_blank'>
        <div className='h-40 w-44 overflow-hidden'>
        <img className='h-full w-full object-cover rounded-xl' src={elem.download_url} />
      </div>
      <h2 className='font-bold text-lg'>{elem.author}</h2>
        </a>
      </div>
    })
  }

  return (
    <div className='bg-black overflow-auto h-screen p-4 text-amber-50'>
      
      <div className='flex flex-wrap gap-4'>
        {printUserData}
      </div>

      <div onClick={()=>{
          if(index > 1){
            setIndex(index-1);
          }
      }} className='flex justify-center items-center gap-8 p-5 font-semibold'>
        <button className='bg-amber-400 px-4 rounded text-black active:scale-95'>Prev</button>
        <button onClick={()=>{
          setIndex(index+1)
        }} className='bg-green-300 rounded text-black px-4 active:scale-95'>Next</button>
      </div>
    </div>
  )
}

export default App