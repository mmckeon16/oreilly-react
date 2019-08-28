
//remove
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