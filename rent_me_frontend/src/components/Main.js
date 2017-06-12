import React, { Component } from 'react';
import { withRouter } from 'react-router'
import { Switch, Route } from 'react-router-dom'
import { fetchProducts } from '../api'
import LoginForm from './LoginForm'
import isAuthenticated from './hocs/isAuthenticated'
import Products from './Products'
import NavBar from './NavBar'
import '../App.css';

const AuthedProductsContainer = isAuthenticated(Products)

class Main extends Component {
  constructor() {
    super()
    this.state = {
      userId: '',
      products: [],
      days_to_rent: 0,
      cart: [],
      cart_total: 0
    }
  }

  setLocalStorage = () => {
    if(!!localStorage.id) {
      this.setState({
        userId: localStorage.id,
        cart: localStorage.cart || [],
        cart_total: localStorage.cart_total || 0

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

  handleSelectBox(e){
    let days_to_rent = Number(e.target.value)
    this.setState({
      days_to_rent: days_to_rent
    })
  }

  addItemToStorage(product, cost){
    if(!localStorage.cart && localStorage.id){
      localStorage.setItem('cart', JSON.stringify([product]))
      localStorage.setItem('cart_total', cost)
    } else if(localStorage.cart && localStorage.id){
      var cart = JSON.parse(localStorage.cart)
      cart.push(product)
      localStorage.cart = JSON.stringify(cart)
      localStorage.cart_total = Number(localStorage.cart_total) + cost
    }
  }

  handleSubmit(product){
    let prevState = this.state
    let days_to_rent = prevState.days_to_rent
    let cost = days_to_rent * product.cost_to_rent
    this.setState({
      days_to_rent: 0,
      cart: [...prevState.cart, product],
      cart_total: prevState.cart_total + cost
    })
    this.addItemToStorage(product, cost)
    alert(`Successfully added ${product.name} to cart`)
  }

  render() {
    return (
      <div>
        <NavBar products={this.productPage.bind(this)} logout={this.logOut.bind(this)} brand='Rent-Me' />
        <Switch>
          <Route path='/login' render={() => <LoginForm storage={this.setLocalStorage.bind(this)} />} />
          <Route exact path='/products' render={() => <AuthedProductsContainer handleSubmit={this.handleSubmit.bind(this)} handleSelectBox={this.handleSelectBox.bind(this)} setStorage={this.setLocalStorage.bind(this)} state={this.state} user={this.state.userId} products={this.state.products}/>}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(Main)


