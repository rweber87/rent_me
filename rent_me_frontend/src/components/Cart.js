import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {Modal} from 'react-materialize'

class Cart extends Component {
	constructor() {
		super()

		this.state = {
			userId: localStorage.id,
			total: localStorage.cart ?  JSON.parse(localStorage.cart).length :  0,
			products: localStorage.cart ? JSON.parse(localStorage.cart) : [],
			cart_total: localStorage.cart_total ? JSON.parse(localStorage.cart_total) : 0
		}
	}


	render() {

		var products = this.state.products.map( product => <li>{product.name}</li>)
		return(
			<Modal
				header='Cart'
				trigger={
					<Link to='/cart'>Cart ({this.state.total})</Link>
			}>
			<div className='card horizontal center'>
				<ul>
					{products}
				</ul>
			</div>

			</Modal>
		)
	}

}

export default Cart