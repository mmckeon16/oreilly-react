import React from 'react';
import Photo from './Photo';
import {Link} from 'react-router-dom';

const PhotoWall =(props) => (
    <div>
        <Link className ="addIcon" to = "/add-photo"></Link>
        <div className="photo-grid">
            {props.posts
                .sort(function(x,y) {
                    return y.id-x.id
                })
                .map((post,index) => <Photo 
                    key={index} 
                    post={post} 
                    {...props}
                    index={index}
                />
            )}
        </div>
    </div>
);

export default PhotoWall;