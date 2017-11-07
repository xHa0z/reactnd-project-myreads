import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Book from "./Book";

class BookShelf extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    handleShelfChange: PropTypes.func.isRequired
  };

  render() {
    let {title, books} = this.props
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book) =>
              <Book key={book.id}
                  id={book.id}
                  title={book.title}
                  imageLinks={book.imageLinks}
                  authors={book.authors}
                  shelf={book.shelf}
                  onHandleShelfChange={(newShelf) => (this.props.handleShelfChange(book.id, newShelf))}/>)
              }
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf