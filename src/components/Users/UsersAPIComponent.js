import React from "react";
import * as axios from "axios";
import Users from "./Users";

class UsersAPIComponent extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${
          this.props.currentPage
        }&count=${this.props.pageSize}`
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
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${
          this.props.pageSize
        }`
      )
      .then(response => {
        debugger;
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    return (
      <Users
        // totalUsersCount={this.props.totalUsersCount}
        pageSize={this.prpos.pageSize}
        currentPage={this.props.currentPage}
        onPageChange={this.onPageChange}
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
      />
    );
  }
}
export default UsersAPIComponent;
