import React from 'react'
import {Modal} from 'react-materialize'
import { Link } from 'react-router-dom'

function ProductShow(props) {
	var product = props.product
	var renters = product.renters
	var reviews = product.reviews.map( (review,idx) => {
		var p_renter = renters.filter( renter => renter.id === review.renter_id )
		return <li key={idx}><text style={{fontWeight: 'bold'}}>{p_renter[0].username}</text>: {review.body}</li>
	})
	
	return(
		<Modal
			header={product.name}
			trigger={
				<Link to={'#!'}><img alt='' src={product.image_url} className='image modal-content' /></Link>
		}>
	<div key={product.id} className="card horizontal center">
	        <div id='img' className="card-image">
	        	<img alt=''  src={product.image_url} className='image modal-content' />
	        </div>
	        <div className="card-content">
	          <span>Category: {product.category}</span>
	          <p>Description: {product.description}</p>
	          <p>Cost Per Day: ${product.cost_to_rent}.00</p>
		      <form >
		          <div className='input-field'>
			          <select defaultValue="" value={props.state.days_to_rent} id='select' className='browser-default' onChange={ e => props.handleSelectBox(e)}>
					      <option defaultValue="0">Choose how many days: </option>
					      <option value="1">1</option>
					      <option value="2">2</option>
					      <option value="3">3</option>
					      <option value="4">4</option>
					      <option value="5">5</option>
					      <option value="6">6</option>
					      <option value="7">7</option>
					  </select>
				  </div>
				  <br/> 
		          <a className="btn halfway-fab waves-effect waves-light grey" onClick={ e => props.handleSubmit(product)}><i className="material-icons">add</i></a>
		      </form>
		    </div>
	        <div id='reviews' className='card-content'>
	        	<span>Customer Reviews:</span>
	        	<ul>
	        		{reviews}
	        	</ul>
        	</div>
	    </div>
</Modal>
	)

}

export default ProductShow