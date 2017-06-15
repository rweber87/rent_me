import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {Modal} from 'react-materialize'
import CartProduct from './CartProduct'
import { cartCheckout } from '../api'

class Cart extends Component {
	constructor(props) {
		super(props)

		this.state = {
			userId: localStorage.id,
			total: localStorage.cart ?  JSON.parse(localStorage.cart).length :  0,
			products: localStorage.cart ? JSON.parse(localStorage.cart) : [],
			cart_total: localStorage.cart_total ? JSON.parse(localStorage.cart_total) : 0
		}

		this.checkout = this.checkout.bind(this)
	}

	checkout(){
		if(this.props.state.cart.length === 0){
			alert("You have nothing in your cart.")
			return
		}
		cartCheckout(this.props.state)
		.then( res => {
			this.setState({
				transactions: res
			})
		})
		localStorage.setItem("cart", [])
		localStorage.setItem("cart_total", 0)
		this.props.history.push('/products')
	}

	removeItemFromCart(product){
		var cart = JSON.parse(localStorage.cart)
		var updatedCart = cart.filter(prod => prod.id !== product.id)
		var updatedTotal = Number(localStorage.cart_total) - (product.days_to_rent * product.cost_to_rent)
		localStorage.setItem('cart', JSON.stringify(updatedCart))
		localStorage.setItem('cart_total', JSON.stringify(updatedTotal))
	}

	render() {
		var total = localStorage.cart ? JSON.parse(localStorage.cart).length : 0
		var cart = localStorage.cart ? JSON.parse(localStorage.cart) : null
		var products = localStorage.cart ? cart.map( (product,i) => <CartProduct onClick={this.removeItemFromCart.bind(this)} key={i} val={i} product={product}/>) : null
		var cart_total = Number(localStorage.cart_total) > 1 ? `Total Cost: $${Number(localStorage.cart_total)}.00` : null
		
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
					{cart_total}
				</div>
				<a onClick={() => this.checkout() } className="btn halfway-fab waves-effect waves-light grey"><i className="material-icons left" >shopping_cart</i>Checkout</a>
			</Modal>
		)
	}

}

export default Cart