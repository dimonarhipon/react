import React from "react";
import clasess from "./Profile.module.css";
// import MyPosts from "./MyPosts/MyPosts.js";
import MyPostsContainer from "./MyPosts/MyPostsContainer.js";
import ProfileInfo from "./ProfileInfo/ProfileInfo.js";

const Profile = props => {
  return (
    <div className={clasess.content}>
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
