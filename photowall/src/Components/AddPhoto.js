import React from 'react';

const AddPhoto = (props) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const imageLink = event.target.elements.link.value;
        const description = event.target.elements.description.value;
        const post = {
            id: Number(new Date()),
            description: description,
            imageLink:imageLink,
        }
        if(description && imageLink) {
            props.startAddingPost(post);
            props.onHistory.push('/');
        }
    }

    return (
        <>
            <form className ="form" onSubmit = {handleSubmit}>
                <input type="text" placeholder="link" name="link"/>
                <input type = "text" placeholder="description" name="description"/>
                <button>Post</button>
            </form>
        </>
    )
}

export default AddPhoto;