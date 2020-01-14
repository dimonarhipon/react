import React from "react";
import userPhoto from "../../assets/images/user.png";
import classes from "./Users.module.css";
import * as axios from "axios";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then(response => {
        debugger;
        this.props.setUsers(response.data.items);
      });
  }
  onPageChange = pageNumber => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then(response => {
        debugger;
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    debugger;
    return (
      <div>
        <div>
          {pages.map(page => {
            return (
              <button
                onClick={e => this.onPageChange(page)}
                className={this.props.currentPage === page && classes.selected}
              >
                {page}
              </button>
            );
          })}
        </div>
        {this.props.users.map(users => (
          <div key={users.id}>
            <div>
              <img
                src={
                  users.photos.small != null ? users.photos.small : userPhoto
                }
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
  }
}
export default Users;
