import React from "react";
import Users from "./Users.js";
import * as axios from "axios";
import { connect } from "react-redux";
import {
  setUsers,
  follow,
  unfollow,
  setCurrentPage,
  toggleIsFetching
} from "../../redux/users-reducer.js";
import Preloader from "../common/Preloader/Preloader.js";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then(response => {
        debugger;
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
      });
  }
  onPageChange = pageNumber => {
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then(response => {
        debugger;
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    debugger;
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChange={this.onPageChange}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
        />
      </>
    );
  }
}

let mapStateToProps = state => {
  return {
    users: state.usersReducer.users,
    pageSize: state.usersReducer.pageSize,
    totalUsersCount: state.usersReducer.totalUsersCount,
    currentPage: state.usersReducer.currentPage,
    isFetching: state.usersReducer.isFetching
  };
};

export default connect(mapStateToProps, {
  setUsers,
  follow,
  unfollow,
  setCurrentPage,
  toggleIsFetching
})(UsersContainer);

// let mapStateToDispatch = dispatch => {
//   return {
//     follow: userId => {
//       dispatch(follow(userId));
//     },
//     unfollow: userId => {
//       dispatch(unfollow(userId));
//     },
//     setUsers: users => {
//       dispatch(setUsers(users));
//     },
//     setCurrentPage: pageNumber => {
//       dispatch(setCurrentPage(pageNumber));
//     },
//     toggleIsFetching: isFetching => {
//       dispatch(toggleIsFetching(isFetching));
//     }
//   };
// };
