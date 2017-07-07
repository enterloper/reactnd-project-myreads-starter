import React, { Component } from 'react'
import './App.css'
import ListBooks from './components/ListBooks';
import * as BooksAPI from './BooksAPI'

class BooksApp extends Component {
    state = {
      // set your state here

      /**
       * TODO: Instead of using this state variable to keep track of which page
       * we're on, use the URL in the browser's address bar. This will ensure that
       * users can use the browser's back and forward buttons to navigate between
       * pages, as well as provide a good URL they can bookmark and share.
       */

      // showSearchPage: true
    }

  // the below method is where this app should make AJAX requests.
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  // removeBook = (book) => {
  //   console.log("Hello from the removeBook function / method");
  //   this.setState((state) => ({
  //     books: state.books.filter((b) => b.id !== book.id)
  //   }))
  // }



  // removeBook: function(event){
  //   this.setState({value: event.target.value});
  // }

  render() {
    return (
      <div>
        <ListBooks/>
      </div>
    )
  }
}

export default BooksApp
