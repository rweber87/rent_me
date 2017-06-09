import React from 'react'


function NavBar(props) {
	return(
		<nav>
			<div className="Main">
	        	<div className="Main-header">
	        		<div className='nav-wrapper'>	
		          		<h5><a id='drowndown-button' className="right dropdown-button" href="#!" data-activates="dropdown">Dropdown<i className="material-icons right">arrow_drop_down</i></a></h5>
		          		<h2 id='logo'><a href='/products'>{props.brand}</a></h2>		
		          	</div>
		          </div>
	        	<ul id="dropdown" className="dropdown-content">
				  <li><a href="#!">Signout</a></li>
				  <li className="divider"></li>
				  <li><a href="#!">Products</a></li>
				  <li className="divider"></li>
				  <li><a href="#!">Cart</a></li>
				  <li className="divider"></li>
				  <li><a href="#!">Profile</a></li>
				</ul>
			</div>
		</nav>
	)
}

export default NavBar