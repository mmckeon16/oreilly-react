import React, {useEffect} from 'react';
import Title from './Title';
import PhotoWall from "./PhotoWall";
import AddPhoto from "./AddPhoto";
import {Route, Link} from "react-router-dom";

const Main = (props) => {

    return (
        <>
            <h1>
                <Link to="/"> PhotoWall</Link>
            </h1>
            <Route exact path = "/" render ={() => (
                <div>
                    <PhotoWall 
                        {...props} 
                    />
                </div>
            )} /> 

            <Route path = "/add-photo" render = {({history}) => (
                <AddPhoto {...props} onHistory={history}/>
            )}/>
        </>
    )
};


export default Main;