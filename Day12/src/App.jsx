import React, { useEffect, useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0);

  const [num2, setNum2] = useState(12)

  useEffect(function(){
    console.log('use effect is running...');
  },[num2])



  // function random(){
  //   const a = Math.random();
  //   console.log(a);
  // }

  // random()

  return (
    <div>
      <h1>value if num is {num}</h1>
      <h2>value of num2 is {num2}</h2>
      <button onClick={()=>{
        setNum(num+1)
      }} 
      onDoubleClick={()=>{
        setNum2(num2+10)
      }}>Click</button>
    </div>
  )
}

export default App