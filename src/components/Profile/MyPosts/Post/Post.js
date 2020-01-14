import React from "react";
import classes from "./Post.module.css";

const Post = props => {
  return (
    <div className={classes.item}>
      <div>
        {!props.editMode && (
          <div>
            <span onDoubleClick={props.activeEditMode}>{props.post}</span>
          </div>
        )}
        {props.editMode && (
          <div>
            <input />
          </div>
        )}
      </div>

      <div>
        <span>{props.likesCount}</span>
      </div>
      <button onClick={() => props.removePost(props.id)}>Удалить</button>
    </div>
  );
};
export default Post;
