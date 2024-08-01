import React, { Children } from 'react'
import Post from '../components/Post';
import { posts } from '../mocks/posts';

const Dasboard = ({Children}) => {


  return (
    <>
      {Children}
      {posts.map((post) => (
        <Post 
        post={post}
        />
      ))}
    </>
  );
}

export default Dasboard