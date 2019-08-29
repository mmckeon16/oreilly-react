import React, { useState, useEffect } from "react";
import PhotoWall from "./PhotoWall";
import AddPhoto from "./AddPhoto";
import { Route, Link } from "react-router-dom";
import Single from "./Single";

const Main = props => {
  useEffect(() => {
    props.startLoadingPosts().then(() => {
      changeLoading(false);
    });
    props.startLoadingComments();
  });

  const [loading, changeLoading] = useState(true);

  return (
    <>
      <h1>
        <Link to="/"> PhotoWall</Link>
      </h1>
      <Route
        exact
        path="/"
        render={() => (
          <div>
            <PhotoWall {...props} />
          </div>
        )}
      />

      <Route
        path="/add-photo"
        render={({ history }) => <AddPhoto {...props} onHistory={history} />}
      />

      <Route
        path="/single/:id"
        render={params => <Single loading={loading} {...props} {...params} />}
      />
    </>
  );
};

export default Main;
