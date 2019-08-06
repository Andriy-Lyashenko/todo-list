import React from 'react';
import './comment-item.scss';

const CommentItem = ({comment,remComment,editComment}) =>{
    return <div className="comment_item">
            <div style={{background: comment.avatar}} className="ci_avatar"></div>
            <div className="ci_description"> {comment.text} </div>
            <button className="ci_delete" onClick={()=> remComment(comment.id)}>Delete</button>
            <button className="ci_edit" onClick={()=> editComment(comment.id)}>Edit</button>
    </div>
};

export default CommentItem