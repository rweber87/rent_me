import React, { Component } from 'react'
import ProductEditForm from './ProductEditForm'

class MyProduct extends Component{
	constructor(props){
		super(props)

		this.state = {
			product: props.product
		}
	}

	render(){
		var product = this.state.product
		var available = this.state.product.avail_to_rent ? "Yes" : "No"
		return(
			<li key={product.id} className='collection-item avatar'>
				<img height='150' width='150' src={this.state.product.image_url} alt='' className='circle'/>
					<p><span className="title">Name: {this.state.product.name}</span>
					<br/>
					<span className="description">Description: {this.state.product.description}</span>
					<br/>
					<span className="price">Listed Price: ${this.state.product.cost_to_rent}.00</span>
					<br/>
					<span className="price">Available to Rent: {available}</span>
					</p>
					<ProductEditForm onEdit={this.props.onEdit} product={this.state.product}/>
					<a onClick={ () => this.props.onDelete(product)} id='delete-icon' href="#!" className="secondary-content"><i className="material-icons red-text">delete</i></a>
			</li>
		)
	}

}

export default MyProduct