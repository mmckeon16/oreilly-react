import React, { useState, useEffect } from 'react';
import Title from './Title';
import PhotoWall from "./PhotoWall";

const Main = (props) => {
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        const data = simDBRequest();
        setPostList(data);
    }, []);

    const removePhoto = (postRemoved) => {
        setPostList(postList.filter(postList => postList !== postRemoved));
    }
    return (
        <>
            <Title title={'Photowall'}/>
            <PhotoWall posts={postList} onRemovePhoto = {removePhoto}/>
        </>
    )
};

const simDBRequest = () =>  (
    [{
        id: "0",
        description: "landscape",
        imageLink: "https://cdn.mos.cms.futurecdn.net/FUE7XiFApEqWZQ85wYcAfM-650-80.jpg"
    },
    {
        id: "1",
        description: "alien",
        imageLink: "https://compote.slate.com/images/248266ae-bc3c-4aa2-a8d0-69a3f65d5500.jpg"
    },
    {
        id: "2",
        description: "vacay",
        imageLink: "https://atlantis.nyc3.digitaloceanspaces.com/styled/8f4597e8d337d22501cede98b6b0ecb4"
    }]
);

export default Main;