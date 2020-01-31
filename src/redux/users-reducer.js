const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 21,
  currentPage: 1,
  isFetching: true
};
//   {
//     id: 1,
//     followed: false,
//     photoUrl:
//       "http://stone-engraver.ru/zbilling/php/modules/magazine/files/imgtovar/%D0%96%D0%B8%D0%B2%D0%BE%D1%82%D0%BD%D1%8B%D0%B5%20%D0%BA%D0%BE%D1%88%D0%BA%D0%B0[100].jpg",
//     fullName: "Dmitry",
//     status: "I am a boss 1",
//     location: { city: "Minsk", country: "Belarus" }
//   },
//   {
//     id: 2,
//     followed: false,
//     photoUrl:
//       "http://stone-engraver.ru/zbilling/php/modules/magazine/files/imgtovar/%D0%96%D0%B8%D0%B2%D0%BE%D1%82%D0%BD%D1%8B%D0%B5%20%D0%BA%D0%BE%D1%88%D0%BA%D0%B0[100].jpg",
//     fullName: "Sasha",
//     status: "I am a boss 2",
//     location: { city: "Moskow", country: "Russia" }
//   },
//   {
//     id: 3,
//     followed: true,
//     photoUrl:
//       "http://stone-engraver.ru/zbilling/php/modules/magazine/files/imgtovar/%D0%96%D0%B8%D0%B2%D0%BE%D1%82%D0%BD%D1%8B%D0%B5%20%D0%BA%D0%BE%D1%88%D0%BA%D0%B0[100].jpg",
//     fullName: "Misha",
//     status: "I am a boss 3",
//     location: { city: "Kiev", country: "Ukraine" }
//   }

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        // users: [...state.users],
        users: state.users.map(users => {
          if (users.id === action.userId) {
            return { ...users, followed: true };
          }
          return users;
        })
      };

    case UNFOLLOW:
      return {
        ...state,
        // users: [...state.users],
        users: state.users.map(users => {
          if (users.id === action.userId) {
            return { ...users, followed: false };
          }
          return users;
        })
      };
    case SET_USERS:
      return {
        ...state,
        users: action.users
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      };
    default:
      return state;
  }
};

export const follow = userId => {
  return {
    type: FOLLOW,
    userId: userId
  };
};
export const unfollow = userId => {
  return {
    type: UNFOLLOW,
    userId: userId
  };
};
export const setUsers = users => {
  return {
    type: SET_USERS,
    users: users
  };
};
export const setCurrentPage = currentPage => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage
  };
};
export const toggleIsFetching = isFetching => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching
  };
};

export default usersReducer;
