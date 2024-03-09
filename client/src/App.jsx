import { useState } from 'react'
import InputTodo from './components/InputTodo'
import './App.css'
import ListTodos from './components/ListTodos'
import ListHeader from './components/ListHeader'

function App() {

  return (
    <div className='app'>
      <ListHeader listName={`Holiday tick list`} />
      <InputTodo />
      <ListTodos />
    </div>
  )
}

export default App
