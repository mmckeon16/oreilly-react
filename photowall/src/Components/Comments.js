import React from 'react';

const Comments = (props) => {
    const handleSubmit = (event) => {
        event.preventDefault()
        const comment = event.target.elements.comment.value;
        props.startAddingComment(comment, props.id);
        event.target.elements.comment.value = '';
    }

    return(
        <div className ="comments">
            {props.comments.map((comment, index) => {
                return (
                    <p key={index}> {comment} </p>
                )
            })}
            <form className="comment-form" onSubmit={handleSubmit}>
                <input typle="text" placeholder="new comment" name="comment"/>
                <input type="submit" hidden/>
            </form>
        </div>
    );
}

export default Comments;