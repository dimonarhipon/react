import Users from "./Users.js";
import { connect } from "react-redux";
import {
  setUsersActionCreator,
  followActionCreator,
  unfollowActionCreator,
  setCurrentPageAC
} from "../../redux/users-reducer.js";

let mapStateToProps = state => {
  return {
    users: state.usersReducer.users,
    pageSize: state.usersReducer.pageSize,
    totalUsersCount: state.usersReducer.totalUsersCount,
    currentPage: state.usersReducer.currentPage
  };
};
let mapStateToDispatch = dispatch => {
  return {
    follow: userId => {
      dispatch(followActionCreator(userId));
    },
    unfollow: userId => {
      dispatch(unfollowActionCreator(userId));
    },
    setUsers: users => {
      dispatch(setUsersActionCreator(users));
    },
    setCurrentPage: pageNumber => {
      dispatch(setCurrentPageAC(pageNumber));
    }
  };
};
let UsersContainer = connect(mapStateToProps, mapStateToDispatch)(Users);

export default UsersContainer;
