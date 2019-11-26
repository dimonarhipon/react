import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from 'react-router-dom';


const Navbar = () => {
	return (
		<nav className={classes.nav}>
			<div  className={`${classes.item} ${classes.active}`}>
			  	<NavLink to="/profile">Profile</NavLink>
			</div>
			<div  className={classes.item}>
			  	<NavLink to="/dialogs">Messages</NavLink>
			</div>
			
		</nav>
	);
}
export default Navbar;