import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookShelf from "./BookShelf";
import { Link } from 'react-router-dom'

class BookList extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    handleShelfChange: PropTypes.func.isRequired
  };



  render() {
    const {books, handleShelfChange} = this.props;
    let currentReadingBooks = books.filter((book) => book.shelf === 'currentlyReading');
    let wantToReadBooks = books.filter((book) => book.shelf === 'wantToRead');
    let readBooks = books.filter((book) => book.shelf === 'read');

    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf title={'Currently Reading'} books={currentReadingBooks} handleShelfChange={(id, shelf) => (handleShelfChange(id, shelf))}/>
            <BookShelf title={'Want to Read'} books={wantToReadBooks} handleShelfChange={(id, shelf) => (handleShelfChange(id, shelf))}/>
            <BookShelf title={'Read'} books={readBooks} handleShelfChange={(id, shelf) => (handleShelfChange(id, shelf))}/>
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>

    )
  }
}

export default BookList