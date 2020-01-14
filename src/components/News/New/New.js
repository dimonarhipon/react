import React from "react";

let New = props => {
  return (
    <div>
      <div id={props.id}>
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
        <button onClick={() => props.deleteNews(props.id)}>Удалить</button>
      </div>
    </div>
  );
};

export default New;
