import React from 'react'

const App = () => {
  
   localStorage.clear();
  // sessionStorage.clear();
  
   localStorage.setItem('user' , 'Vivek')

  const user = localStorage.getItem('user');

  console.log(user);

  localStorage.setItem('age' , 22)

  const age = localStorage.getItem('age');

  localStorage.removeItem('age');
  
  // storing an object ⬇️

  const person = {
    username : 'Satyam',
    age: 18,
    city :'New York'
  }

  localStorage.setItem('person',JSON.stringify(person))

  const value = localStorage.getItem('person')

  console.log(JSON.parse(value));

  console.log(age);
  return (
    <div>App</div>
  )
}

export default App