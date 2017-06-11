import React from 'react'
import ProductShow from './ProductShow'


function Product(props) {
	let product = props.product
	return (
		<div key={product.id} className="card horizontal center">
	        <div id='img' className="card-image">
	        	<ProductShow product={product} />
	        </div>
	        <div id='card-content' className="card-content">
	          <h5 className="card-title center">{product.name}</h5>
	          <span>Category: {product.category}</span>
	          <p>{product.description}</p>
	          <a className="btn halfway-fab waves-effect waves-light grey"><i className="material-icons">add</i></a>
	        </div>
	    </div>
	)
}

export default Product