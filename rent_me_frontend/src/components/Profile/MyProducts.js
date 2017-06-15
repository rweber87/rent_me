import React, { Component } from 'react'
import MyProduct from './MyProduct'
import ProductForm from './ProductForm'


import { createNewProduct, editProduct, deleteProduct } from '../../api'



class MyProducts extends Component {
	constructor(props){
		super(props)

		this.state = {
			products: props.products.filter( product => `${product.owner_id}` === localStorage.id)
		}
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			userId: localStorage.id,
			products: nextProps.products.filter( product => `${product.owner_id}` === localStorage.id)
		})
	}

	handleAddProduct(params){  
	    createNewProduct(params)
	    .then(res => 
	      	this.setState( prevState =>({
	        	products: [...prevState, res ]
	    })))
	 }

	handleDeleteProduct(params){
		deleteProduct(params)
		.then( () => {
			this.setState( prevState => ({
				products: prevState.products.filter( product => product.id !== params.id)
			}))
			this.props.history.push('/profile')
		})
	}

	handleEditProduct(params){
		editProduct(params).then( () => {
			this.setState(prevState => {
				return {
					products: prevState.products.map(p => {
						if (p.id === params.id)	{
							return params
						} else {
							return p
						}
					})
				}
			})
			this.props.history.push('/profile')
		})
	}

	render() {

		if(!this.state){
			return (<div>
					Loading...
				</div>)
		}
		var products = this.state.products.map( product => <MyProduct onDelete={this.handleDeleteProduct.bind(this)} onEdit={this.handleEditProduct.bind(this)} key={product.id} product={product}/>)
		return (
			<div id='' className="col s12">
				<h2 className='header'>My Products</h2>
				<ul className='collection'>
					{products}
				</ul>
				<h3 className='header'>Add a Product</h3>
				<ProductForm onSubmit={this.handleAddProduct.bind(this)} />
			</div>
		)
	}

}

export default MyProducts