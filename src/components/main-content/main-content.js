import React from 'react';
import './main-content.scss'

import TodoList from '../todo-list'
import CommentList from '../comment-list'

class MainContent extends React.Component {

    state = {
        todo: [
            {desc: "asdasdasdawdwadaadadadadadaas", id:1, comments: [{},{},{}]}
        ]
    }

    render(){
        return (
         <div className="m_container">
            <TodoList/>
            <CommentList/>
         </div>
        )
    }
}

export default MainContent