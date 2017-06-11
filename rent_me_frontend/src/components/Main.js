import React, { Component } from 'react';
import { withRouter } from 'react-router'
import { Switch, Route } from 'react-router-dom'
import { fetchProducts } from '../api'
import LoginForm from './LoginForm'
import isAuthenticated from './hocs/isAuthenticated'
import Products from './Products'
import ProductShow from './ProductShow'
import NavBar from './NavBar'
import '../App.css';

const AuthedProductsContainer = isAuthenticated(Products)

class Main extends Component {
  constructor() {
    super()
    this.state = {
      userId: '',
      products: []
    }
  }

  setLocalStorage = () => {
    if(!!localStorage.id) {
      this.setState({
        userId: localStorage.id
      })
    }
  }

  componentDidMount() {
    this.setLocalStorage()
    fetchProducts(this.state.userId)
    .then( products => this.setState({
      products: products
    }))
  }

  logOut() {
    localStorage.clear()
    this.props.history.push('/login')  
  }

  productPage() {
    this.props.history.push('/products')
  }

  render() {
    return (
      <div>
        <NavBar products={this.productPage.bind(this)} logout={this.logOut.bind(this)} brand='Rent-Me' />
        <Switch>
          <Route path='/login' render={() => <LoginForm storage={this.setLocalStorage.bind(this)} />} />
          <Route exact path='/products' render={() => <AuthedProductsContainer setStorage={this.setLocalStorage.bind(this)} user={this.state.userId} products={this.state.products}/>}/>
          <Route exact path='/products/:id' render={ ({match}) => {
            const product = this.state.products.find( product => product.id === parseInt(match.params.id))
            return <ProductShow product={product} />
          }}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(Main)


