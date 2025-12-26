import React, { useState } from 'react'

const App = () => {

  // let a = 20;
  // function changeA(){
  //   console.log(a);
  //   a++;
  //   console.log(a);
  // }
  // NOW WE USE USESTATE HOOK TO SHOW ON OUR SITE 

  const [num, setNum] = useState(0);
  const [username, setUsername] = useState('Vivek')
  const [users, setUsers] = useState([10,20,30])

  function changeNum(){
    setNum(30);
    setUsers([40,50,60])
  }

  function changeUser(){
    setUsername("Satyam")
  }

  return (
    <div>
      <h1>
          Value of Num is {num}
          <br/>
          Value of User is {username}
          <br/>
          Users {users}
        </h1> 
      <button onClick={()=>{changeNum(); changeUser()}}>       
        Click Me!!
      </button>
    </div>
      
  )
}

export default App