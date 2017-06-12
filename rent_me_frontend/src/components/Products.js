import React, { Component } from 'react';
import Product from './Product'
import CategorySelector from './CategorySelector'
import { fetchProducts } from '../api'

class Products extends Component {
	constructor(props) {
		super(props)

		this.state = {
		    userId: props.user,
		    products: props.products,
		    filter: '',
		    selectedCheckboxes: new Set().add('All')
		}
	}

	componentDidMount() {
		if(localStorage.id === "") {
			this.props.history.push('/login')  
		} else if (localStorage.id !== "" || !localStorage.id) {
			this.setState({
				userId: localStorage.id
			})
		}
	    fetchProducts(this.state.userId)
	    .then( products => this.setState({
	    	products: products.filter( product => `${product.owner_id}` !== localStorage.id)
	    })) 
	}

	handleFilterChange(e) {
		let input = e.target.value
		this.setState({
			filter: input
		})
		if(input === '') {
			let checkboxes = this.state.selectedCheckboxes
			fetchProducts(this.state.userId)
		    .then( (products => this.setState({
		    	products: products.filter(function(product){
					if(`${product.owner_id}` !== localStorage.id && checkboxes.has(product.category[0].toUpperCase() + product.category.slice(1))){
						return product
					}
				})
			})))
		}
		fetchProducts(this.state.userId)
	    .then( products => this.setState({
	    	products: products.filter( product => `${product.owner_id}` !== localStorage.id && product.name.includes(input))
	    }))
	}

	toggleCheckbox(e) {
		this.state.selectedCheckboxes.has(e) ? this.state.selectedCheckboxes.delete(e) : this.state.selectedCheckboxes.add(e)
		if(this.state.selectedCheckboxes.has('All') || this.state.selectedCheckboxes.size === 0) {
	      fetchProducts(this.state.userId)
	        .then( products => this.setState({
	          products: products.filter( product => `${product.owner_id}` !== localStorage.id)
	        }))
	    } else {
	      let checkboxes = this.state.selectedCheckboxes
	      fetchProducts(this.state.userId)
	        .then( (products => this.setState({
	          products: products.filter(function(product){
		          if(`${product.owner_id}` !== localStorage.id && checkboxes.has(product.category[0].toUpperCase() + product.category.slice(1))){
		            return product
		          }
	        })
	        })))
	    }		
	}

	render () {
		
		let products = this.state.products.map( (product,i) => 
				<Product state={this.props.state} handleSubmit={this.props.handleSubmit} handleSelectBox={this.props.handleSelectBox} key={product.id} product={product} / >
			)

		return (
			<div className='container'>
				<div id='product-row' className='row'>
					<CategorySelector filter={this.state.filter} boxes={this.state.selectedCheckboxes} onChange={ this.handleFilterChange.bind(this) } handleChange={this.toggleCheckbox.bind(this)} />
		    		<div className='col s5'>
		    			{products}
		    		</div>
		    	</div>
		    </div>
		)
	}
}

export default Products
