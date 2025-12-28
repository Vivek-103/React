import React from 'react'
import axios from 'axios'

const App = () => {

  // async function getData(){
  //   console.log("Data fetched");
  //   const response =  await fetch('https://jsonplaceholder.typicode.com/todos/1')

  //   console.log(response)
  // }

  // const getData = async() => {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')

  //   const data = await response.json();

  //   console.log(data);
  // }


  // NOW USING AXIOS
   const getData = async()=>{
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')

    console.log(response.data);

    console.log('Data fetched using axios')
  }

  return (
    <div>
      <button onClick={getData}>
        Get Data
      </button>
    </div>
  )
}

export default App