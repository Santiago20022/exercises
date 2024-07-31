import React from 'react'
import { posts } from '../mocks/posts'

function Post () {
  return (
    <>
      {posts.map((post) => (
      <div key={post.id}>
        <img src={post.images} alt={post.description} />
          <p>{post.description}</p>
        <p>Likes: {post.likes}</p>
      </div>
      ))}
    </>
  )
}


export default Post