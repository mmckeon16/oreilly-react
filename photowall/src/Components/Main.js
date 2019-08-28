import React, {useEffect} from 'react';
import Title from './Title';
import PhotoWall from "./PhotoWall";
import AddPhoto from "./AddPhoto";
import {Route} from "react-router-dom";

const Main = (props) => {

    return (
        <>
            {console.log(props)}
            <Route exact path = "/" render ={() => (
                <div>
                    <Title title={'Photowall'}/>
                    <PhotoWall 
                        {...props} 
                    />
                </div>
            )} /> 

            {/* <Route path = "/add-photo" render = {({history}) => (
                <AddPhoto onAddPhoto={(addedPost) => {
                    addPhoto(addedPost);
                    history.push("/");
                }} />
            )}/> */}
        </>
    )
};


export default Main;