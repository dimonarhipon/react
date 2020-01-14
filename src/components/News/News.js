import React from "react";
import New from "./New/New.js";
import Head from "./Head.js";

let News = props => {
  debugger;
  let onNews = () => {
    props.addNews();
  };
  let onChangeNews = e => {
    let desc = e.target.value;
    props.changeNews(desc);
  };
  let onChangeTitleNews = e => {
    let title = e.target.value;
    props.changeTitleNews(title);
  };
  let deleteNews = id => {
    props.removeNews(id);
  };
  return (
    <div>
      <div>
        <h4>Добавьте новость</h4>
        <input
          type="text"
          onChange={onChangeTitleNews}
          value={props.changeTitle}
        />
        <br />
        <textarea
          type="text"
          onChange={onChangeNews}
          value={props.changeDesc}
          rows="4"
          cols="30"
        />
        <br />
        <button onClick={onNews}>Добавить новость</button>
      </div>
      <div>
        <button onClick={() => props.show()}>Я смог?</button>
        {props.showClose ? <Head close={props.close} /> : null}
      </div>
      {/* <Head /> */}
      <div>
        {props.newsData.map(({ id, title, desc }) => (
          <New
            deleteNews={deleteNews}
            id={id}
            key={id}
            title={title}
            desc={desc}
          />
        ))}
      </div>
    </div>
  );
};

export default News;
