import React, {useState} from 'react'
import { Navbar } from './components/Navbar'
import {TodoForm} from './components/TodoForm'
import {TodoList} from './components/TodoList'

const App: React.FunctionComponent = () => {
  const [todos, setTodos] = useState([]);

  const addHandler = (title: string) => {
    const newTodo = {
      title: title,
      id: Date.now(),
      complete: false 
    }
    setTodos([newTodo, ...todos])
  }

  return <>
    <Navbar/>
    <div className="container">
      <TodoForm onAdd ={addHandler}/>
      <TodoList todos={todos}/>
    </div>
  </>
}

export default App;
