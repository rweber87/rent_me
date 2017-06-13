import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {Modal} from 'react-materialize'
import CartProduct from './CartProduct'

class Cart extends Component {
	constructor(props) {
		super(props)

		this.state = {
			userId: localStorage.id,
			total: localStorage.cart ?  JSON.parse(localStorage.cart).length :  0,
			products: localStorage.cart ? JSON.parse(localStorage.cart) : [],
			cart_total: localStorage.cart_total ? JSON.parse(localStorage.cart_total) : 0
		}
	}

	removeItemFromCart(product){
		debugger
		var cart = JSON.parse(localStorage.cart)
		var updatedCart = cart.filter(prod => prod.id !== product.id)
		var updatedTotal = Number(localStorage.cart_total) - (product.days_to_rent * product.cost_to_rent)
		localStorage.setItem('cart', JSON.stringify(updatedCart))
		localStorage.setItem('cart_total', JSON.stringify(updatedTotal))
	}

	render() {
		debugger
		var total = localStorage.cart ? JSON.parse(localStorage.cart).length : 0
		var cart = localStorage.cart ? JSON.parse(localStorage.cart) : null
		var products = localStorage.cart ? cart.map( (product,i) => <CartProduct onClick={this.removeItemFromCart.bind(this)} key={i} val={i} product={product}/>) : null
		var cart_total = Number(localStorage.cart_total)
		return(
			<Modal
				header='Cart'
				trigger={
					<Link to='/cart'>Cart ({total})</Link>
			}>
				<ul className="collection">
					{products}
				</ul>
				<div>
				Total Cost: ${cart_total}.00
				</div>
				<a className="btn halfway-fab waves-effect waves-light grey"><i className="material-icons left" >shopping_cart</i>Checkout</a>
			</Modal>
		)
	}

}

export default Cart