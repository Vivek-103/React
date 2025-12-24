import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {

  const users = [
    {
      img:'https://i.pinimg.com/1200x/2b/02/69/2b02690bf6957f4e19afe5efc3338ea5.jpg',
      intro:'I need to make money ASAP.',
      tag:'Satisfied'
    },
    {
      img:'https://i.pinimg.com/736x/58/2e/60/582e60a6283601e8d2439eef7763c996.jpg',
      intro:'Never Give Up',
      tag:'Underserved'
    },
    {
      img:'https://i.pinimg.com/736x/66/3c/7e/663c7e3ecc38ae68cc5e0556c9eccf4b.jpg',
      intro:'Keep trying My G',
      tag:'Dangerous'
    },
    {
      img:'https://i.pinimg.com/1200x/9b/5e/68/9b5e685d7fd5bde4f7b6e7716f6e3f85.jpg',
      intro:'Peace Out. Adios. Mucha Gracias.',
      tag:'Underbank'
    }
  ]

  return (
    <div>
      <Section1 users={users} />
    </div>
  )
}

export default App