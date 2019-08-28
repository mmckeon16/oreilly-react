import {database} from '../database/config';

export function startAddingPost(post) {
    return (dispatch) => {
        return database.ref('posts').update({[post.id]:post}).then(()=> {
            dispatch(addPost(post))
        });
    } 
}


//remove post
export function removePost(index) {
    return {
        type: 'REMOVE_POST',
        index
    }
}

//add post
export function addPost(post) {
    return {
        type: 'ADD_NEW_POST',
        post
    }
}

//add comment
export function addComment(comment, postId) {
    return {
        type: "ADD_COMMENT",
        comment,
        postId
    }
}