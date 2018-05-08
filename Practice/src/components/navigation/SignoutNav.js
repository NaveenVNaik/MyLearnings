import React from 'react';
import './SignoutNav.css';
import Logo from '../logo/Logo';

const SignoutNav = () => {
	return (
		<nav className="nav bb">
			<div>
		    	<Logo />
		    </div>
		    <div className="signout">
				<p className="f4 pointer  white dim pr3">Sign Out</p>
			</div>
		</nav>
	);
}

export default SignoutNav;