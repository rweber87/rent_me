import React from 'react'
import { withRouter } from 'react-router'
import { Button, Icon } from 'react-materialize';
import { logIn } from '../api' 	

class LoginForm extends React.Component {
	
	constructor() {
		super()

		this.state = {
			username: '',
			password: '',
			address: ''
		}
		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleInputChange(props, value) {
		this.setState({
			[props]: value
		})
	}

	handleSubmit(e) {
		e.preventDefault()
		logIn( this.state )
		.then( res => {
			if(res.error){
				return this.props.history.push('/login')	
			}
 			localStorage.setItem('jwt', res.token)
 			localStorage.setItem('id', res.user.id)
 			this.props.storage()
 			this.props.history.push('/products')
 		})
		this.setState({username: '', password: '', address: ''})
	}

	render() {
		return(
			 <div id='login-form' className='row col s6'>
			 	<br/>
			 	<form className='form col s6 offset-s3 z-depth-3' onSubmit={this.handleSubmit}>
			 		<h5>Log in</h5>
		 			<input id='login-form' className='input-field' placeholder='Username' type='text' onChange={ e => this.handleInputChange('username', e.target.value)}/>
		 			<input id='login-form' className='input-field' placeholder='Password' type='password' onChange={ e => this.handleInputChange('password', e.target.value)}/>
		 			<br/>
		 			<Button className='blue' waves='light'>Submit<Icon left>save</Icon></Button>
			 		<br/>
			 		<br/>
			 	</form>
			 </div>
		)
	}
}

export default withRouter(LoginForm)