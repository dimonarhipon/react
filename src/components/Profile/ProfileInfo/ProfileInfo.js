import React from "react";
import classes from "./ProfileInfo.module.css";

class ProfileInfo extends React.Component {
  render() {
    return (
      <div>
        <div>
          <img
            src="http://kisgazeta.ru/wp-content/uploads/2019/01/i.jpg"
            alt="content"
          />
        </div>
        <div className={classes.descriptionBlock}>ava+ description</div>
      </div>
    );
  }
  
};
export default ProfileInfo;
