import React from 'react'
import miniTodo from './miniTodo'


export default function Todo(props) {
    console.log(props.todos)
  return (
    <div>
      {props.todos.map((todo, index) => (
        <miniTodo key={index} todo={todo} />
        // <miniTodo key={index } todo={todo}/>
      ))}
    </div>
  )
}
