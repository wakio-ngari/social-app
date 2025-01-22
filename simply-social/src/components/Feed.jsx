import React from 'react';
import Post from './Post';

const Feed=() =>{
  const posts=[
    { id: 1, author:'prettyvishy',content:'Beautiful day,sunkissed,happy to be here'},
     { id: 2, author:'dee', content:'Yolo!' },
      { id: 3, author: 'papi', content:'Friday ipewe heshima zake'}
  ];
  return (
    <div className="feed">
      {posts.length ===0?(
        <p>Be the first to post something</p>
      ):(
      posts.map((post)=>(
        <Post key={post.id} author={post.author} content={post.content} />
      ))
    )}
    </div>
  );
};

export default Feed;
