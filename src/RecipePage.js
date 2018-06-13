import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import Search from './Search'
import Food from './Food'

class RecipePage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Search />
        <div>
          <Food />
        </div>
        <div style={{clear:'both'}} />
        <Footer />
      </div>
    )
  }
}

export default RecipePage