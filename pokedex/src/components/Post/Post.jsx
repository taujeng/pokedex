import React, { useEffect, useState } from 'react';
import './post.css';

const Post = ({ id, data, loading }) => {
  // const postName = data['name'];
  // const postUrl = data['url'];
  const [postDetails, setPostDetails] = useState(false);
  const [postData, setPostData] = useState(null);
  const [isHere, setIsHere] = useState(true);

  const postID = id;

  // useEffect(() => {
  //   setPostData(data);
  //   let tempTitle = '';
  //   if (postData) {
  //     while (postData.order.length < 3) {
  //       tempTitle += '0';
  //     }
  //   }
  //   setPostTitle(tempTitle);
  // }, []);

  // Uppercase Words
  function upperCase(str) {
    return str[0].toUpperCase() + str.slice(1);
  }

  // Creating Post Title
  let postTitle = String(data.order);
  while (postTitle.length < 3) {
    postTitle = '0' + postTitle;
  }
  let name1 = data.name;
  // Might have to change this if Pokemon names contain >1 word
  name1 = upperCase(name1);
  postTitle = '#' + postTitle + ' ' + name1;

  // Pokemon Types
  let pokemonTypes = upperCase(data.types[0].type.name);

  for (let i = 1; i < data.types.length; i++) {
    pokemonTypes += ' • ' + upperCase(data.types[i].type.name);
  }

  // useEffect(() => {
  //   async function getDetails() {
  //     const urlDetails = postUrl;
  //     const responseDetails = await fetch(urlDetails);
  //     const dataDetails = await responseDetails.json();

  //     setPostDetails(dataDetails);
  //   }
  //   getDetails();
  // }, []);

  // useEffect(() => {
  //   setPostData(data);
  //   setIsHere(true);
  // }, [postData]);

  // let postImage;
  // if (!postDetails) {
  //   postImage = <h1>loading man</h1>;
  // } else if (postDetails) {
  //   postImage = (
  //     <img src={postDetails['sprites']['other']['official-artwork']} alt="" />
  //   );
  // }

  return (
    <div className={`post-container ${data.types[0].type.name}-type`}>
      <div className="img-container">
        <img
          className="post-image"
          src={data['sprites']['other']['official-artwork']['front_default']}
          alt=""
        />
      </div>

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
