import React, { Component } from 'react'
import MyProduct from './MyProduct'
import ProductForm from './ProductForm'
import { createNewProduct, editProduct, deleteProduct, fetchUserProducts, getImageURL } from '../../api'



class MyProducts extends Component {
	constructor(props){
		super(props)

		this.state = {
			products: []
		}
	}

	componentDidMount() {
		fetchUserProducts(localStorage.id)
		.then ( products => this.setState({
			products: products
		}) )
		.catch(err => console.log(err))
		
	}

	handleAddProduct(params, e){  
		e.preventDefault()
		// if(params.name === "" || params.description === "" || params.category === "" || params.cost_to_rent === 0){
		// 	console.log(params)
		// 	debugger
		// 	alert("Please fill out all necessary fields")
		// 	return
		// } else if(params.image_url === "") {
		// 	getImageURL(params.name)
		// 	.then( res => console.log("URL response", res) )
		// }
	    createNewProduct(params)
	    .then(res => 
	      	this.setState( prevState =>({
	        	products: [...prevState.products, res ]
	    })))
	 }

	handleDeleteProduct(params){
		deleteProduct(params)
		.then( () => {
			this.setState( prevState => ({
				products: prevState.products.filter( product => product.id !== params.id)
			}))
		})
	}

	handleEditProduct(params, e){
		e.preventDefault()
		console.log("before edit fires", params)
		editProduct(params).then( () => {
			this.setState(prevState => {
				return {
					products: prevState.products.map(p => {
						if (p.id === params.id)	{
							console.log(params)
							console.log(p)
							return params
						} else {
							return p
						}
					})
				}
			})
			console.log("my products", params)
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