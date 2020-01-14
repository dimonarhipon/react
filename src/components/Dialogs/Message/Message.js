import React from "react";
import clasess from "../Dialogs.module.css";

const Message = props => {
  return (
    <div>
      <div className={clasess.message}>{props.message}</div>
    </div>
  );
};

export default Message;
