import React, {useState} from 'react'
import style from './STYLES_CSS/newTodo.module.css'


const NewTodo = (props) => {

    const [todo, setTodo] = useState({title: "", desc: ""})
    const {title, desc} = todo;

    const handleSubmit = (event)=>{
        event.preventDefault();
        props.onAddTodo(todo)
        setTodo({title: "", desc:""})
    }

    const changeHandler = (event)=>{
    const name = event.target.name;
        setTodo((oldTodo) =>{
            return{...oldTodo, [name]:event.target.value}
        })
    }

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      
      <div className={style.form_field}>
    
    <label htmlFor='title' className={style.form_field_label}>
        Title : </label>
    
    <input type='text' 
    id='title' 
    name='title' 
    className={style.form_field_input} 
    value={title} 
    onChange={changeHandler}> 
    </input>
      
      </div>

      <div className={style.form_field}>

    <label htmlFor='desc' 
    className={style.form_field_label}>Description : 
    </label>

    <textarea type='text' 
    id='desc' 
    name='desc' 
    className={style.form_field_textarea} 
    value={desc} 
    onChange={changeHandler}> 
    </textarea>

    </div>

      <button type='submit' className={style.form_button}>
        Add todo</button>
    
    </form>
  )
}

export default NewTodo
