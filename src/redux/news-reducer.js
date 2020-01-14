const ADD_STORY = "ADD-STORY";
const CHANGE_TITLE_STORY = "CHANGE-TITLE-STORY";
const CHANGE_DESC_STORY = "CHANGE-DESC-STORY";
const REMOVE_STORY = "REMOVE-SROTY";
const SHOW = "SHOW";
const CLOSE = "CLOSE";

let initialState = {
  newsData: [],
  changeTitle: "Ты победитель",
  changeDesc: "ты явно не зря тратишь время. Это является подтверждением",
  counter: 0,
  showClose: false
  //   showOpen: true,
  //   showClose: false
  // }
};
let newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_STORY:
      return {
        ...state,
        newsData: [
          ...state.newsData,
          {
            id: ++state.counter,
            title: state.changeTitle,
            desc: state.changeDesc
          }
        ],
        changeDesc: "",
        changeTitle: ""
      };
    case CHANGE_TITLE_STORY:
      return {
        ...state,
        changeTitle: action.title
      };
    case CHANGE_DESC_STORY:
      return {
        ...state,
        changeDesc: action.desc
      };
    case REMOVE_STORY:
      return {
        ...state,
        newsData: [
          ...state.newsData.filter(newsData => newsData.id !== action.id)
        ]
      };
    case SHOW:
      return {
        ...state,
        showClose: true
      };
    case CLOSE:
      return {
        ...state,
        showClose: false
      };
    default:
      return state;
  }
};

export let addStoryAC = () => {
  return {
    type: ADD_STORY
  };
};
export let changeStoryTitleAC = title => {
  return {
    type: CHANGE_TITLE_STORY,
    title
  };
};
export let changeStoryAC = desc => {
  return {
    type: CHANGE_DESC_STORY,
    desc
  };
};
export let removeStoryAC = id => {
  return {
    type: REMOVE_STORY,
    id
  };
};
export let showAC = () => {
  return {
    type: SHOW
  };
};
export let closeAC = () => {
  return {
    type: CLOSE
  };
};
export default newsReducer;
