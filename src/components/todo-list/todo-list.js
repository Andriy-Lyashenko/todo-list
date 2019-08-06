import React from 'react'
import './todo-list.scss'

import TodoItem from '../todo-item/todo-item'


const TodoList = ({todo,setActive,remItem,setItemValue,setItem,newItemValue}) =>{
    return (
        <div className="todo_list">
           <div className="td_container">
              <h1>Items</h1>
              <div className="add_section">
                <input onChange={(e)=> setItemValue(e.target.value)} type="text" value={newItemValue} />
                <button onClick={()=> setItem()}>Add new</button>
              </div>
              {todo.map(item => {
                  return <TodoItem key={item.id} remItem={remItem} setActive={setActive} item={item}/>
              })}
           </div>
        </div>
    )
}

export default TodoList