import React from 'react'

function Products(props) {
	if (!props.products) {
		return null
	}
	var products = props.products.map( product => 
			<div key={product.id} className="card horizontal center">
		        <div id='img' className="card-image">
		          <img alt='' src={product.image_url} className='image' />
		        </div>
		        <div className="card-content">
		          <h5 className="card-title center">{product.name}</h5>
		          <span>Category: {product.category}</span>
		          <p>{product.description}</p>
		          <a className="btn halfway-fab waves-effect waves-light grey"><i className="material-icons">add</i></a>
		        </div>
		    </div>
		)

	return (
		<div className='container'>
			<div id='product-row' className='row'>
	    		<div className='col s4 offset-s3'>
	    			{products}
	    		</div>
	    	</div>
	    </div>

	)
}

export default Products
