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
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.userId !== prevState.userId){
      if(!!this.state.userId){
        console.log('did update', this.state)
        fetchProducts(this.state.userId)
        .then( products => this.setState({
          products: products
        }))
      }
    }
  }

  render() {
    return (
      <div>
        <NavBar brand='Rent-Me' />
        <Switch>
          <Route path='/login' render={() => <LoginForm storage={this.setLocalStorage.bind(this)} />} />
          <Route path='/products' render={() => <AuthedProductsContainer products={this.state.products}/>}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(Main)
