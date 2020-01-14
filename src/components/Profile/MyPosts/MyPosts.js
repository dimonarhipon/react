import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post.js";

const MyPosts = props => {
  debugger;
  // let posts = props.state.profileReducer.postsData;

  let newPost = () => {
    props.addPost();
  };
  let onPostChange = event => {
    let text = event.target.value;
    props.addPostChange(text);
  };
  let removePost = id => {
    props.removePost(id);
  };
  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea value={props.editChangePost} onChange={onPostChange} />
        </div>
        <div>
          <button onClick={newPost}>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>
        {props.posts.map(({ id, post, likesCount }) => (
          <Post
            removePost={removePost}
            key={id}
            id={id}
            post={post}
            likesCount={likesCount}
          />
        ))}
      </div>
    </div>
  );
};

export default MyPosts;
