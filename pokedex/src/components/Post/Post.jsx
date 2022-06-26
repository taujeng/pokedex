import React, { useState } from 'react';

const Post = ({ data }) => {
  console.log(data);
  const postName = data['name'];
  const postDetail = data['url'];

  return (
    <div>
      <h1>{postName}</h1>
      <h1>{postDetail}</h1>
    </div>
  );
};

export default Post;
