import BookItem from "../bookItem/BookItem";
import { useState } from "react";
import BookSearch from "../bookSearch/BookSearch";

const Books = ({ books }) => {
  const [selectedBook, setSelectedBook] = useState("");
  const [bookSearch, setBookSearch] = useState("");

  const handleBookSearch = (book) => {
    setBookSearch(book);
  };

  const booksToShow = books.filter((book) =>
    book.title.toLowerCase().includes(bookSearch.toLowerCase())
  );

  return (
    <>
      {selectedBook && (
        <p>
          El libro seleccionado es <b>{selectedBook}</b>
        </p>
      )}

      <BookSearch onFindBook={handleBookSearch} value={bookSearch} />

      <div className="d-flex justify-content-center flex-wrap">
        {booksToShow.length > 0 ? (
          booksToShow.map((book) => (
            <BookItem
              key={book.id}
              title={book.title}
              author={book.author}
              rating={book.rating}
              pageCount={book.pageCount}
              imageUrl={book.imageUrl}
              available={book.available}
              onSelectedBook={setSelectedBook}
            />
          ))
        ) : (
          <h2>No se encontro el libro seleccionado</h2>
        )}
      </div>
    </>
  );
};

export default Books;
