import React, {useState} from 'react'
import Todo from './Todo';
import NewTodo from './NewTodo';

const dummyTodos = ["todo1", "todo2"];

export default function Ground() {
    const [todos, setTodos] = useState(dummyTodos)

const handleNewTodo = (newTodo)=>{
    // console.log("From Parent " + newTodo)
    setTodos([...todos, newTodo])
}

  return (
    <div >
     <Todo todos={todos} />
     <NewTodo onTodo={handleNewTodo } />
    </div>
  )
}
