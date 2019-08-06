import React, {Fragment} from 'react';
import './comment-list.scss'

import CommentItem from '../comment-item';

const CommentList = ({todo,setCommentValue,setComment,newCommentValue,remComment}) => {
    const comments = todo.some(item=> item.active) ? 
    todo.find(item=> item.active).comments : [];

    let activeCommentNum = todo.findIndex(item=> item.active) + 1;

    const renderInput = activeCommentNum !== 0 ? 
    <div className="c_input">
        <input
         placeholder="Enter text"
         onKeyUp={e=> (e.ctrlKey && e.keyCode === 13) ? setComment(e.target.value) : null}
         value={newCommentValue}
         onChange={(e)=> setCommentValue(e.target.value)}
         type="text"/>
        <button onClick={()=> setComment()}>Add</button>
    </div> : ''

    return (
        <div className="comment_list">
            <div className="c_container">
                <h1>{activeCommentNum === 0 ? 'Choose item to comment' : `Comment # ${activeCommentNum}`}</h1>
                {comments.map(comment=>{
                    return <CommentItem remComment={remComment} comment={comment}/>
                })}
                {renderInput}
            </div>
        </div>
    )
}

export default CommentList