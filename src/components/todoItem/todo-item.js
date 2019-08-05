import React from 'react'
import './todo-item.scss'



const TodoItem = ({item,setActive,remItem}) => {
    console.log(item.active)
    return (
       <div className="item_section">
            <p onClick={() => setActive(item.id)}>{item.desc}</p>
            <button onClick={()=> remItem(item)}>Delete</button>
            {item.active ? <div className="active_item"></div> : ''}
       </div>
    )
}

export default TodoItem