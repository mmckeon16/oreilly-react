import React, { Component } from 'react';

const Photo = (props) => (
    //const post = this.props.post
    <figure className="figure"> 
        <img src={props.post.imageLink} alt={props.post.description}/>
    </figure>
)

export default Photo;