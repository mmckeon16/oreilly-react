import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

const Single = (props) => {
    const {match, posts} = props;
    const id = Number(match.params.id);
    const post = posts.posts.find((post) => post.id === id);
    const comments = props.comments[id] || [];
    const index = props.posts.posts.findIndex((post) => post.id===id);

    return (
       
        <div className ="single-photo">
            <Photo post ={post} {...props} index={index}/>
            <Comments addComment={props.addComment} comments = {comments} id={id}/>
        </div>
    )
}

export default Single;