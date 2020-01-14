import MyPosts from "./MyPosts.js";
import {
  newPostActionCreator,
  onPostChangeActionCreator,
  removePostActionCreator
} from "../../../redux/profile-reducer.js";
import { connect } from "react-redux";

// const MyPostsContainer = props => {
//   let newPost = () => {
//     props.store.dispatch(newPostActionCreator());
//   };
//   let onPostChange = text => {
//     props.store.dispatch(onPostChangeActionCreator(text));
//   };
//   return (
//     <MyPosts
//       addPost={newPost}
//       addPostChange={onPostChange}
//       editChangePost={state.profileReducer.editChangePost}
//       posts={state.profileReducer.postsData}
//     />
//   );
// };
let mapStateToProps = state => {
  return {
    editChangePost: state.profileReducer.editChangePost,
    posts: state.profileReducer.postsData
  };
};
let mapDispatchStateToProps = dispatch => {
  return {
    addPost: () => {
      dispatch(newPostActionCreator());
    },
    addPostChange: text => {
      dispatch(onPostChangeActionCreator(text));
    },
    removePost: id => {
      dispatch(removePostActionCreator(id));
    }
  };
};

let MyPostsContainer = connect(
  mapStateToProps,
  mapDispatchStateToProps
)(MyPosts);

export default MyPostsContainer;
