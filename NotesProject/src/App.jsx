import React, { useState } from 'react'
import { X } from 'lucide-react';
import Snowfall from 'react-snowfall';

const App = () => {
  
  const [title, setTitle] = useState('')

  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])
  
  const submitHandler = (e) =>{
    e.preventDefault();
    
    const copyTask = [...task]; 
    
    copyTask.push({title , details})

    setTask(copyTask);



    setTitle('')
    setDetails('')
  }
  const deleteNote = (idx)=>{
    const copyTask = [...task];
    copyTask.splice(idx,1);
    setTask(copyTask);
  }

  return (
    <div className='h-full bg-emerald-700 '> <Snowfall/>
      <h1 className='text-4xl font-bold p-10'>Add Notes</h1> 
      <form onSubmit={(e)=>{
          submitHandler(e);
      }} className='flex items-start p-10 justify-between'>
        <div className='flex w-1/2 items-start flex-col gap-3'>
        {/* 1st input for heading*/}
          <input 
        type='text' 
        placeholder='enter Notes Heading' 
        className='px-5  py-2 border-2 rounded w-full font-medium'
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value)
        }}
        />

        {/* 2nd input notes adding */}
        <textarea 
        placeholder='enter details'
        className='px-5 h-32 py-2 border-2 rounded w-full font-medium'
        value={details}
        onChange={(e)=>{
          setDetails(e.target.value)
        }}
        >          
        </textarea>


        <button className='bg-white px-5 py-2 rounded active:bg-gray-500 w-full font-medium'>Add Notes</button>
        </div>


        <img className='h-60 rounded' src='https://i.pinimg.com/736x/27/40/2c/27402cdb018ee9a847ae91531508f696.jpg'/>
      </form>
      <div className=' px-10 '>
        <h1 className='text-4xl font-bold'>Your Notes</h1>
       <div className='flex flex-wrap gap-3 mt-5'>
         {task.map(function(elem , idx){
          return <div key={idx} className="relative h-52 bg-cover w-40 rounded-xl bg-[url('https://static.vecteezy.com/system/resources/thumbnails/026/684/911/small_2x/old-vintage-note-paper-with-tape-isolated-png.png')] p-5">
            <h2 onClick={()=>{
              deleteNote(idx)
            }} className='absolute top-5 right-5 py-1 bg-red-200 rounded-full cursor-pointer active:scale-95'><X /></h2>
            <h3 className='leading-tight text-xl font-bold mt-3 px-3 '>{elem.title}</h3>
            <p className='mt-2 leading-tight font-medium text-sm text-emerald-700 px-3'>{elem.details}</p>
          </div>
         })}
        
       </div>
      </div>
    </div>
  )
}

export default App