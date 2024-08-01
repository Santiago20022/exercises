import React from 'react'
import { users } from '../mocks/users'


function Post ({post}) {

  const user = users.find((user) => user.id === post.userId )
  
  // un usuario que esta en un userid

  return (
    <div className='flex flex-grow items-center min-h-screen w-full justify-center bg-gray-300 pt-1 mt-4'>
      <div className='flex flex-col'>
      <p className='border-2 gap-x-1 text-left'>{user.username}</p>
      <img className='gap-y-1 gap-x-1' src={post.image} alt={post.description} />
        <p className='border-2'>{post.description}</p>
        <p className='border-2'>Likes: {post.likes}</p>
      </div> 
      </div>
  )
}


export default Post