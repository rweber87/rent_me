import React from 'react';
import MyProducts from './MyProducts'


function ProfilePage (props) {
	return(
		<div className='container'>
			<div id='profile-row' className='row'>
				<MyProducts history={props.history} products={props.products} />
			</div>
		</div>
	)
}

export default ProfilePage