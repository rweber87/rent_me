import React from 'react'
import ProductShow from './ProductShow'


function Product(props) {
	let product = props.product
	return (
		<div key={product.id} className="card horizontal center">
	        <div id='img' className="card-image">
	        	<ProductShow state={props.state} handleSubmit={props.handleSubmit} handleSelectBox={props.handleSelectBox} product={product} />
	        </div>
	        <div id='card-content' className="card-content">
	          <h5 className="card-title center">{product.name}</h5>
	          <span>Category: {product.category}</span>
	          <p>{product.description}</p>
	        </div>
	    </div>
	)
}

export default Product