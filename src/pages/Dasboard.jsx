import React from 'react';
import Post from '../components/Post';
import { posts } from '../mocks/posts';
import Aside from '../components/Aside';

const Dasboard = () => {


  return (
    <>
      <div
      id='app'
        className="relative h-screen dark:bg-black cursor-default overflow-hidden"
      >
        
        <aside className="hidden sm:flex sm:flex-col sm:gap-9 sm:border-r sm:border-slate-300 sm:dark:border-slate-700 sm:px-4 sm:pt-6">
          <Aside />
        </aside>
        <main className="flex justify-center w-full overflow-y-auto">
          <div className="flex flex-col gap-12">
            {posts.map((post) => (
              <Post post={post} />
            ))}
          </div>
        </main>
      </div>
    </>
  );
}

export default Dasboard;