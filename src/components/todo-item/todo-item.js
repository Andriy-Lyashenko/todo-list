import React from 'react';
import './todo-item.scss';



const TodoItem = ({item,setActive,remItem}) => {
    return (
       <div className="item_section">
            <p onClick={() => setActive(item.id)}>
              {item.desc}
              {item.active ? <div className="active_item"></div> : ''}
              {item.comments.length > 0 ?<span className="quant_item">{item.comments.length}</span> : ''}
            </p>
            <button onClick={()=> remItem(item)}>Delete</button>
       </div>
    )
};

export default TodoItem