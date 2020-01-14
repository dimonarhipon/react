const ADD_POST = "ADD-POST";
const EDIT_POST = "EDIT-POST";
const REMOVE_POST = "REMOVE-POST";
const SHIFT_POST = "SHIFT-POST";

let initialState = {
  postsData: [
    { id: 1, post: "How are you?1", likesCount: "21" },
    { id: 2, post: "How are you?2", likesCount: "12" },
    { id: 3, post: "How are you?3", likesCount: "13" },
    { id: 4, post: "How are you?4", likesCount: "14" },
    { id: 5, post: "How are you?5", likesCount: "15" },
    { id: 6, post: "How are you?6", likesCount: "16" }
  ],
  editChangePost: "ПРивет",
  counter: 7
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        postsData: [
          ...state.postsData,
          { id: ++state.counter, post: state.editChangePost, likesCount: 17 }
        ],
        editChangePost: ""
      };
    case EDIT_POST:
      return {
        ...state,
        editChangePost: action.editPost
      };
    case REMOVE_POST:
      return {
        ...state,
        postsData: [
          ...state.postsData.filter(postsData => postsData.id !== action.id)
        ]
      };
    case SHIFT_POST:
      return {
        ...state,
        postsData: [...state.postsData, { id: action.id, post: action.text }]
      };
    default:
      return state;
  }
};

export const newPostActionCreator = () => {
  return {
    type: ADD_POST
  };
};
export const onPostChangeActionCreator = text => {
  return {
    type: EDIT_POST,
    editPost: text
  };
};
export const removePostActionCreator = id => {
  return {
    type: REMOVE_POST,
    id: id
  };
};

export default profileReducer;
