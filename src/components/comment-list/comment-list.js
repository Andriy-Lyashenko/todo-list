import React from 'react';
import './comment-list.scss'

import CommentItem from '../../components/comment-item/comment-item'

const CommentList = (props) => {
    const {
        todo,
        setCommentValue,
        setComment,
        newCommentValue,
        remComment,
        editComment,
        focus
    } = props;

    const comments = todo.some(item=> item.active) ? 
    todo.find(item=> item.active).comments : [];

    let activeCommentNum = todo.findIndex(item=> item.active) + 1;

    const renderInput = activeCommentNum !== 0 ? 
    <div className="c_input">
        <input
         autoFocus={false}
         id='cl_i'
         placeholder="Enter text"
         onKeyUp={e=> (e.ctrlKey && e.keyCode === 13) ? setComment() : null}
         value={newCommentValue}
         onChange={(e)=> setCommentValue(e.target.value)}
         type="text"/>
        <button onClick={()=> setComment()}>{focus ? "Edit" : "Add"}</button>
    </div> : '' ;

    return (
        <div className="comment_list">
            <div className="c_container">
                <h1>{activeCommentNum === 0 ? 'Choose item to comment' : `Comment # ${activeCommentNum}`}</h1>
                {comments.map(comment=>{
                    return <CommentItem
                             key={comment.id}
                             remComment={remComment}
                             comment={comment}
                             editComment={editComment}
                            />
                })}
                {renderInput}
            </div>
        </div>
    )
};

export default CommentList