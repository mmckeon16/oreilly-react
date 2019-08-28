import React, { Component } from 'react';
import Photo from './Photo';

const PhotoWall =(props) => (
    <div>{props.posts.map((post,index) => <Photo key={index} post={post}/>)}</div>
);

export default PhotoWall;