import React from 'react'
import { Redirect } from 'react-router-dom'

export default function isAuthenticated(WrappedComponent){
	return function (props) {
		console.log(props)
		if(!localStorage.getItem('jwt') || Number(localStorage.id) !== props.user) {
	      return <Redirect to='/login' />
	    }
		return < WrappedComponent {...props} />
	}
}