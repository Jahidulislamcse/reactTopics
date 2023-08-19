import React, {useState} from 'react'
import Todos from './Todos'
import style from './STYLES_CSS/home.module.css'
import NewTodo from './NewTodo'
import { v4 as uuidv4 } from "uuid"

    

const Home = () => {

  const [todos, setTodos] = useState([]);

  const handleAddTodo = (todo)=>{
    setTodos((prevTodos)=>{
      return[...prevTodos, { id: uuidv4(), todo}]
    })
    console.log(todos)
  }

  const handleRemoveTodo = (id) =>{
    
    setTodos((prevTodos)=>{
      const filterTodos = todos.filter((todo)=> todo.id !== id)
      return filterTodos;
    })
  }
  return (
    <div className={style.container}>
      <h1 style={{color:"white"}}>Todo App</h1>
      <NewTodo onAddTodo={handleAddTodo}/>
      <Todos todos={todos} onRemoveTodo={handleRemoveTodo}/>
    </div>
  )
}

export default Home
