import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import { Books } from './Books';
import Book from './Book';


function BookList(){
  return (
  <section className="booklist">
    {Books.map((book) => {
      const {img, title, author, price} = book;
      return (
        <div>
          <Book key={book.id} {...book}></Book>
                              {/* book={book}인데, {...book}하면 book에 들어있는거 다 올린다는 이야기  */}
        </div>
      )
    })
  }
  </section>
  )
}

ReactDom.render(<BookList/>, document.getElementById('root'))
