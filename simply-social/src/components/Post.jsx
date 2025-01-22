import React, { useState } from 'react';

const Post = ({ author, content }) => {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="post">
      <h3>{author}</h3>
      <p>{content}</p>
      <button onClick={handleLike}>Like ({likes})</button>
      <span role="img" aria-label="heart" className="heart-emoji"> ❤️ </span>
    </div>
  );
};

export default Post;
