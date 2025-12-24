import React from 'react'

const App = () => {

  const btnClicked = ()=>{
    console.log("button is clicked")
  }

  return (
    <div>
      <h1>Hello, Vivek !</h1>
      <button  onClick={btnClicked}>Change User</button>
      <button onClick={function(){
        console.log("Hello Guys")
      }}>Explore This</button>

      <input onChange={(elem)=>{
        console.log(elem.target.value)
      }} type='text' placeholder='enter name'/>

      <div onMouseMove={(elem)=>{
        console.log(elem.clientX)
      }} className='box'>
      Hello
      </div>
      <div className='page1'>
        
      </div>
    </div>
  )
}

export default App