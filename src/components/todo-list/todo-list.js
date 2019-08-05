import React from 'react'
import './todo-list.scss'

import TodoItem from '../todoItem'


const TodoList = ({todo,setActive,remItem,setItemValue,setItem,newItemValue}) =>{
    console.log(newItemValue)
    return (
        <div className="todo_list">
           <div className="td_container">
              <h1>Items</h1>
              <div className="add_section">
                <input onChange={(e)=> setItemValue(e.target.value)} type="text" value={newItemValue} />
                <button onClick={()=> setItem()}>Add new</button>
              </div>
              {todo.map(item => {
                  return <TodoItem remItem={remItem} setActive={setActive} item={item}/>
              })}
           </div>
        </div>
    )
}

export default TodoList