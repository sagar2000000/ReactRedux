import { useState } from 'react'

import './App.css'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AddTodo/>
    <TodoList/>
  
    </>
  )
}

export default App
