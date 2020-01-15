import React from "react";
import userPhoto from "../../assets/images/user.png";
import classes from "./Users.module.css";

let Users = props => {
  let pagesCount = Math.ceil(props.totalUsersCount / this.props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      <div>
        {props.pages.map(page => {
          return (
            <button
              onClick={e => this.onPageChange(page)}
              className={props.currentPage === page && classes.selected}
            >
              {page}
            </button>
          );
        })}
      </div>
      {props.users.map(users => (
        <div key={users.id}>
          <div>
            <img
              src={users.photos.small != null ? users.photos.small : userPhoto}
              className={classes.image_wrap}
              alt="user"
            />
          </div>
          <div>
            {users.followed ? (
              <button onClick={() => this.props.unfollow(users.id)}>
                Unfollow
              </button>
            ) : (
              <button onClick={() => this.props.follow(users.id)}>
                Follow
              </button>
            )}
          </div>
          <div>
            <div>{users.name}</div>
            <div>{users.status}</div>
          </div>
          <div>
            <div>{"users.location.country"}</div>
            <div>{"users.location.city"}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Users;
