import React from 'react';
import LeftDrawer from './leftdrawer';
import './navinshort.css';

const NavInshort = ({setCategory}) => {
	return(
		<div className = "nav">
			<div className = "icon">
			<LeftDrawer setCategory = { setCategory }/>
			 </div>
			<img 
			style = {{cursor: "pointer"}}
			src = "https://assets.inshorts.com/website_assets/images/logo_inshorts.png" alt= "image"
			height  = "80%"/>
		</div>
		);
};

export default NavInshort;