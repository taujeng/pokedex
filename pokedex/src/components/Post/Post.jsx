import React, { useEffect, useState } from 'react';
import styleHelper from '../../styleHelper';
import './post.css';

const Post = ({ data, selectPokemon, showDetails }) => {
  // Creating Post Title
  let postTitle = String(data.order);
  while (postTitle.length < 3) {
    postTitle = '0' + postTitle;
  }
  let name1 = data.name;
  // Might have to change this if Pokemon names contain >1 word
  name1 = styleHelper.upperCase(name1);
  postTitle = '#' + postTitle + ' ' + name1;

  // Pokemon Types
  let pokemonTypes = styleHelper.upperCase(data.types[0].type.name);

  for (let i = 1; i < data.types.length; i++) {
    pokemonTypes += ' • ' + styleHelper.upperCase(data.types[i].type.name);
  }

  const postClick = () => {
    selectPokemon(data.id);
    showDetails();
  };

  return (
    <div
      onClick={postClick}
      className={`post-container ${data.types[0].type.name}-type`}
      id="post-container"
    >
      {/* Post Image + Title */}
      <div className="img-container">
        <img
          className="post-image"
          src={data['sprites']['other']['official-artwork']['front_default']}
          alt={data.name}
        />
      </div>
      {/* Post Sub-Text */}
      <div className="post-text">
        <p>
          <b>{postTitle}</b>
        </p>
        <p>{pokemonTypes}</p>
      </div>
    </div>
  );
};

export default Post;
