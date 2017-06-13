import React from 'react'
import { Link } from 'react-router-dom'
import Cart from './Cart'


function NavBar(props) {
	return(	
		<nav>
			<div className="Main">
	        	<div className="Main-header">
	        		<div className='nav-wrapper'>	
		          		<h5><a id='drowndown-button' className="right dropdown-button" href="#!" data-activates="dropdown">Menu<i className="material-icons right"></i></a></h5>
		          		<h2 id='logo' ><Link to='/products'>{props.brand}</Link></h2>		
		          	</div>
		          </div>
	        	<ul id="dropdown" className="dropdown-content">
				  <li><Link to='/products'>Products</Link></li>
				  <li className="divider"></li>
				  <li><Cart state={props.state} /></li>
				  <li className="divider"></li>
				  <li><a href="#!">Profile</a></li>
				  <li className="divider"></li>
				  <li><a onClick={ () => props.logout() } >Log out</a></li>
				</ul>
			</div>
		</nav>
	)
}

export default NavBar