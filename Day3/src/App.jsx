import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
     <Card user = 'Vivek' age ={22} img='https://plus.unsplash.com/premium_photo-1669833443895-ce69a383fc64?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
     <Card user = 'Rohit' age ={21} img='https://images.unsplash.com/photo-1765890194950-6e25c47118f9?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8'/>
     <Card user = 'Tanmay' age ={21} img = 'https://images.unsplash.com/photo-1765915968433-86d4d13ae1a1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8'/>     
     </div>
  )
}

export default App