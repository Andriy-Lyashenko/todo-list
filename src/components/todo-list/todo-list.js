import React from 'react'
import './todo-list.scss'

import TodoItem from '../todoItem'


const TodoList = (props) =>{
    return (
        <div className="todo_list">
           <div className="td_container">
              <h1>Items</h1>
              <div className="add_section">
                <input type="text" />
                <button>Add new</button>
              </div>
              {[''].map(item => {
                  return <TodoItem/>
              })}
           </div>
        </div>
    )
}

export default TodoList