import React from 'react';
import './comment-item.scss';

const CommentItem = ({comment,remComment}) =>{
    return <div className="comment_item">
            <div style={{background: comment.avatar}} className="ci_avatar"></div>
            <div className="ci_description"> {comment.text} </div>
            <button onClick={()=> remComment(comment.id)}>Delete</button>
    </div>
};

export default CommentItem