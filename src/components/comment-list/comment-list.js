import React from 'react';
import './comment-list.scss'

import CommentItem from '../comment-item';

const CommentList = ({todo}) => {
    // const comments = todo.length === 0 ? [] :
    // todo.filter(item => item.active === true)[0].comments
    const activeCommentNum = todo.findIndex(item=> item.active === true) + 1
    return (
        <div className="comment_list">
            <div className="c_container">
                <h1>Comments # {activeCommentNum}</h1>
                {/* {comments.map(item=>{
                    return <CommentItem comment={item}/>
                })} */}
            </div>
        </div>
    )
}

export default CommentList