export function logIn(params){
  return fetch('http://localhost:3000/api/v1/auth', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(params)
  }).then( res => res.json() )
}

export function fetchProducts(id) {
	console.log(id)
	return fetch('http://localhost:3000/api/v1/products', {
		headers: {
	      'Authorization': localStorage.getItem('jwt'),
	      'userId': id
	    }
	}).then( res => res.json() )
}

