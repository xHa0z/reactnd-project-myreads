import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Book from "./components/Book";
import BookList from "./components/BookList"


class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    this.retrieveAllBooks();
  }

  retrieveAllBooks() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
      console.log(this.state.books)
    })
  }
  changeShelf = (id, shelf) => {
    BooksAPI.update({id},shelf).then(
      this.retrieveAllBooks()
    )
    console.log(this.state.books)
  };

  render() {
    return (
      <div className="app">
        {/*<ul>*/}
          {/*{this.state.books.map((book, index) =>*/}
            {/*<li key={book.id}>{<Book*/}
              {/*id={book.id}*/}
              {/*title={book.title}*/}
              {/*imageLinks={book.imageLinks}*/}
              {/*authors={book.authors}*/}
              {/*shelf={book.shelf}*/}
              {/*onHandleShelfChange={(newShelf) => (this.changeShelf(book.id, newShelf))}/>}*/}
            {/*</li>)}*/}
        {/*</ul>*/}
        <BookList
            books={this.state.books}
            handleShelfChange={(id,shelf)=>{
              this.changeShelf(id,shelf)
            }}
        />

      </div>
    )
  }
}

export default BooksApp
