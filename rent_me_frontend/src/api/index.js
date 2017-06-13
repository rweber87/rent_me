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

export function saleTransaction() {
  
}

// add user input to the end of the URL
var gettyAPI = 'https://api.gettyimages.com/v3/search/images?fields=id,title,thumb,referral_destinations&sort_order=best&'