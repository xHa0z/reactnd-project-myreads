import React, { Component } from 'react';
import BookShelf from "./BookShelf";
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'

class SearchPage extends Component {
  state = {
    query: '',
    books: [],
  };

  updateQuery = (query) => {
    this.setState({ query });
    this.searchForBooks(query);
  };

  clearQuery = () => {
    this.setState({books: [], query: ''})
  };

  searchForBooks = (query) => {
    if (query) {
      BooksAPI.search(query.trim(), 10).then(result => {
        let books = [];
        if (result.length > 0) {
          books = result
        }
        books = books.filter((book) => book.imageLinks);
        books.map((book) => {this.updateBookShelf(book);})
        this.setState({books});
      });
    } else {
      this.clearQuery();
    }
  };

  updateBookShelf = (book) => {
    const {books} = this.props;
    const bookInLibrary = books.find((bookInLibrary) => (bookInLibrary.id === book.id));
    book.shelf = bookInLibrary === undefined ? 'none' : bookInLibrary.shelf;
    return book;
  };






  render() {
    const {books, query} = this.state;
    return (
      <div>
        <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search" to="/">Close</Link>
            <div className="search-books-input-wrapper">
              <input type="text"
                     placeholder="Search by title or author"
                     value={query}
                     onChange={(event) => this.updateQuery(event.target.value)}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid"></ol>
          </div>
        </div>
        {query !== '' && books.length > 0 &&
          (<BookShelf title="Search Results" books={books} handleShelfChange={(id, shelf) => {
          this.props.handleShelfChange(id, shelf)
        }}/>)}
      </div>

    )
  }
}

export default SearchPage