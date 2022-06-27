import React, { useEffect, useState } from 'react';

const Post = ({ id, data, loading }) => {
  const postName = data['name'];
  const postUrl = data['url'];
  const [postDetails, setPostDetails] = useState(false);

  // useEffect(() => {
  //   async function getDetails() {
  //     const urlDetails = postUrl;
  //     const responseDetails = await fetch(urlDetails);
  //     const dataDetails = await responseDetails.json();

  //     setPostDetails(dataDetails);
  //   }
  //   getDetails();
  // }, []);

  if (loading) {
    return <h3>loading loading</h3>;
  }

  // let postImage;
  // if (!postDetails) {
  //   postImage = <h1>loading man</h1>;
  // } else if (postDetails) {
  //   postImage = (
  //     <img src={postDetails['sprites']['other']['official-artwork']} alt="" />
  //   );
  // }

  return (
    <div>
      {/* {postImage} */}
      {/* <img src={postDetails['sprites']['other']['official-artwork']} alt="" /> */}
      <div>{postDetails.order}</div>
      <h1>{postName}</h1>
      <h1>{postDetails}</h1>
    </div>
  );
};

export default Post;
