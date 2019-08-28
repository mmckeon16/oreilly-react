import React from 'react';
import Photo from './Photo';

const PhotoWall =(props) => (
    <>
        <a className ="addIcon" onClick = {props.onNavigate} href = "#AddPhoto"></a>
        {/*<button className="addIcon" onClick = {props.onNavigate}>  </button>*/}
        <div>
            {props.posts.map(
                (post,index) => <Photo 
                    key={index} 
                    post={post} 
                    onRemovePhoto = {props.onRemovePhoto}
                />
            )}
        </div>
    </>
);

export default PhotoWall;