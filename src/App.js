import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';

import Header from './components/Header/Header.js';
import Navbar from './components/Navbar/Navbar.js';
import Profile from './components/Profile/Profile.js';
import DialogsContainer from './components/Dialogs/DialogsContainer.js';



const App = (props) => {

	debugger;
  	return (
  	<BrowserRouter>
	    <div className="app-wrapper">
	      	<Header />
	      	<Navbar />
	      	<div className="app-wrapper-content">
		      	<Route path="/dialogs" render={ () => <DialogsContainer 
		      		store={props.store}
		      		/>} />

		      		{/*state={props.state.dialogsPage}*/}
		      		{/*dialogsData={props.state.dialogPage.dialogsData}*/}
		      	
		      	<Route path="/profile" render={ () => <Profile 
		      		store={props.store}/>} />

		      	{/*profilePage={props.state.profilePage}*/}
		   	</div>
	    </div>
	</BrowserRouter>
  	);
}
// newPostText={props.newPostText}

export default App;