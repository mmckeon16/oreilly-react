import {database} from '../database/config';

export function startAddingPost(post) {
    return (dispatch) => {
        return database.ref('posts').update({[post.id]:post}).then(()=> {
            dispatch(addPost(post))
        }).catch((error) => {
            console.log(error);
        });
    } 
}

export function startLoadingPosts() {
    return (dispatch) => {
        return database.ref('posts').once('value').then((snapshot) => {
            let posts=[];
            snapshot.forEach((childSnapShot)=> {
                posts.push(childSnapShot.val());
            })
            dispatch(loadPosts(posts));
        }).catch((error) => {
            console.log(error);
        }); 
    }
}

export function startRemovePost(index, id) {
    return (dispatch) => {
        return database.ref(`posts/${id}`).remove().then(()=> {
            dispatch(removePost(index));
        }).catch((error) => {
            console.log(error);
        });
    }
}

export function startAddingComment(comment, id) {
    return (dispatch) => {
        return database.ref(`comments/${id}`).push(comment).then(()=>{
            dispatch(addComment(comment, id))
        }).catch((error) => {
            console.log(error);
        });
    }
}

export function startLoadingComments() {
    return (dispatch) => {
        return database.ref('comments').once('value').then((snapshot)=> {
            let comments= {}
            snapshot.forEach((childSnapshot)=> {
                comments[childSnapshot.key] = Object.values(childSnapshot.val());
            })
            dispatch(loadComments(comments));
        })
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

export function loadPosts(posts) {
    return {
        type:"LOAD_POSTS",
        posts
    }
}

export function loadComments(comments) {
    return {
        type: "LOAD_COMMENTS",
        comments
    }
}