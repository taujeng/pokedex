import React, { useEffect, useState } from 'react';

const Post = ({ id, data, loading }) => {
  // const postName = data['name'];
  // const postUrl = data['url'];
  const [postDetails, setPostDetails] = useState(false);
  const [postData, setPostData] = useState([]);
  const [isHere, setIsHere] = useState(true);

  const postID = id;

  console.log(data, 'post data');

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
      <img
        src={data['sprites']['other']['official-artwork']['front_default']}
        alt=""
      />

      <div>
        <div>{data['order']}</div>
        <h1>{data.name}</h1>
        <h1>{data.weight}</h1>
      </div>
    </div>
  );
};

export default Post;
