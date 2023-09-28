import { useState } from 'react'
import InputTodo from './components/InputTodo'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <InputTodo />
    </>
  )
}

export default App
