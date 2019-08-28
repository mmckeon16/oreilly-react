import React from 'react';
import Photo from './Photo';
import {Link} from 'react-router-dom';

const PhotoWall =(props) => (
    <div>
        <Link className ="addIcon" to = "/add-photo"></Link>
        <div className="photo-grid">
            {console.log(props.posts)}
            {props.posts
                .sort(function(x,y) {
                    return y.id-x.id
                })
                .map((post,index) => <Photo 
                    key={index} 
                    post={post} 
                    onRemovePhoto = {props.onRemovePhoto}
                />
            )}
        </div>
    </div>
);

export default PhotoWall;