import { connect } from "react-redux";
import {
  addStoryAC,
  changeStoryTitleAC,
  changeStoryAC,
  removeStoryAC,
  showAC,
  closeAC
} from "../../redux/news-reducer.js";
import News from "./News.js";

let mapStateToProps = state => {
  debugger;
  return {
    newsData: state.newsReducer.newsData,
    changeDesc: state.newsReducer.changeDesc,
    changeTitle: state.newsReducer.changeTitle,
    showClose: state.newsReducer.showClose
  };
};
let mapDispatchToProps = dispatch => {
  return {
    addNews: () => {
      dispatch(addStoryAC());
    },
    changeTitleNews: title => {
      dispatch(changeStoryTitleAC(title));
    },
    changeNews: desc => {
      dispatch(changeStoryAC(desc));
    },
    removeNews: id => {
      dispatch(removeStoryAC(id));
    },
    show: () => {
      dispatch(showAC());
    },
    close: () => {
      dispatch(closeAC());
    }
  };
};

let NewsContainer = connect(mapStateToProps, mapDispatchToProps)(News);

export default NewsContainer;
