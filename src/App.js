import React, { Fragment } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Header from "./components/Header/Header.js";
import Navbar from "./components/Navbar/Navbar.js";
import DialogsContainer from "./components/Dialogs/DialogsContainer.js";
import Profile from "./components/Profile/Profile.js";
import UsersContainer from "./components/Users/UsersContainer.js";
import NewsContainer from "./components/News/NewsContainer";

const App = props => (
  <Fragment>
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route path="" />
        <Route path="/dialogs" render={() => <DialogsContainer />} />
        <Route path="/profile" render={() => <Profile />} />
        <Route path="/users" render={() => <UsersContainer />} />
        <Route path="/news" render={() => <NewsContainer />} />
        <Route path="/settings" />
      </div>
    </div>
  </Fragment>
);

export default App;
