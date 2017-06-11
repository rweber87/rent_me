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
		    selectedCheckboxes: new Set()
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
		console.log("filter change")
		let input = e.target.value
		this.setState({
			filter: input
		})
	}

	toggleCheckbox(e) {
	    if (this.state.selectedCheckboxes.has(e)) {
	      this.state.selectedCheckboxes.delete(e);
	    } else {
	      this.state.selectedCheckboxes.add(e);
	    }
	    console.log("Im working", this.state)
	    console.log(this.state.selectedCheckboxes)
	  }

	  handleFormSubmit(e) {
	    e.preventDefault();

	    for (const checkbox of this.state.selectedCheckboxes) {
	      console.log(checkbox, 'is selected.');
	    }
	  }


	render () {
		let products = this.state.products.map( (product,i) => 
				<Product key={product.id} product={product} / >
			)

		return (
			<div className='container'>
				<div id='product-row' className='row'>
					<CategorySelector filter={this.state.filter} boxes={this.state.selectedCheckboxes} onChange={ this.handleFilterChange.bind(this) } handleChange={this.toggleCheckbox.bind(this)} onSubmit={this.handleFormSubmit.bind(this)}/>
		    		<div className='col s5'>
		    			{products}
		    		</div>
		    	</div>
		    </div>
		)
	}
}

export default Products
