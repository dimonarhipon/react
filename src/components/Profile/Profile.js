import React from 'react';
import clasess from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.js';
import ProfileInfo from './ProfileInfo/ProfileInfo.js';
import MyPostsContainer from './MyPosts/MyPostsContainer.js';


const Profile = (props) => {
	debugger;
	return (
		<div className={clasess.content}>
		  	<ProfileInfo />
			<MyPostsContainer 
				store={props.store}
				 />

				{/*postData={props.store.getState().profilePage.postData} 
				newPostText={props.store.getState().profilePage.newPostText}*/}
		</div>
	);
}

export default Profile;