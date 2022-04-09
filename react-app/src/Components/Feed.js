import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Post from "./Post";
import NewPost from "./NewPost";

const Feed = () => {

  const [data, setData] = useState("");

  const getPostData = () => {
    // fetch data
    axios
    .get("http://localhost:3002/posts")
    //  wait for promise to be resolved using .then, set state variable data to returned data
    .then((data) => setData(data.data))
    .catch((error) => console.log(error));
  };

  useEffect(() => {
    getPostData();
  }, []);

  return (
    <div style={{ maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto'}}>
      {
        data.map(d =>
          <Post title={d.title} body={d.body} key={d.id} />
        )
      }
      
      <NewPost/>
    </div>
  )
}
export default Feed;
