import React from 'react'
import { useState } from 'react'

const App = () => {

  const [num, setNum] = useState({user:'Vivek',age:21});

  const btnClicked = ()=>{
    const newNum = {...num};
    newNum.user = 'Satyam'
    newNum.age = 23
    setNum(newNum)
  }
   
  return (
    <div>
      <h1>{num.user} , {num.age}</h1>
      <button onClick={btnClicked}>Click!
      </button>
    </div>
  )
}

export default App