import React, { Component } from 'react'

class BookSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  selectionTest() {
    console.log("Hello from selectionTest method / function");
  }

  render() {
    return(
      <div className="book-shelf-changer">
        <select onChange={this.selectionTest}>
          <option value="none" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default BookSelection
