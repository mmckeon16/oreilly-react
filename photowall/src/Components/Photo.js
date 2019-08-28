import React from 'react';

const Photo = (props) => (
    //const post = this.props.post
    <figure className="figure"> 
        <img src={props.post.imageLink} alt={props.post.description}/>
        <figcaption> <p> {props.post.description} </p></figcaption>
        <div className="button-container">
            <button className="remove-button" onClick={() => {
                props.onRemovePhoto(props.post)
            }}>Remove</button>
        </div>
    </figure>
)

export default Photo;