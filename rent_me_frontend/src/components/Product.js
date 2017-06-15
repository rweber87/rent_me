import React from 'react'
import ProductShow from './ProductShow'


function Product(props) {
	let product = props.product
	return (
		<div key={product.id} className="card horizontal">
	        <div id='img' className="card-image half-container">
	        	<ProductShow state={props.state} handleSubmit={props.handleSubmit} handleSelectBox={props.handleSelectBox} product={product} />
	        </div>
	        <div id='card-content' className="right card-content half-container">
	          <h5 className="card-title center">{product.name}</h5>
	          <p className="center">Category: {product.category}</p>
	          <p className="center">{product.description}</p>
	        </div>
	    </div>
	)
}

export default Product