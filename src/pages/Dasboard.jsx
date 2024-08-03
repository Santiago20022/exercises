import React, { Children } from 'react'
import Post from '../components/Post';
import { posts } from '../mocks/posts';
import Nav from '../components/Nav';
import Aside from '../components/Aside';

const Dasboard = ({Children}) => {


  return (
    <>
      <div
        id="app"
        className="relative h-screen dark:bg-black cursor-default overflow-hidden grid grid-rows-[auto_1fr] sm:grid-rows-[auto_1fr] sm:grid-cols-[245px_1fr]"
      >
        <nav className="row-span-1 col-span-full bg-white dark:bg-black border-b border-slate-300 dark:border-slate-700 sm:col-span-2 ">
          <Nav />
        </nav>
        <aside className="hidden sm:flex sm:flex-col sm:gap-9 sm:border-r sm:border-slate-300 sm:dark:border-slate-700 sm:px-4 sm:pt-6">
          <Aside />
        </aside>
        <main className="text- row-span-1 col-span-full sm:col-span-1 flex justify-center w-full overflow-y-auto">
          <div className="flex flex-col gap-12">
            {Children}
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