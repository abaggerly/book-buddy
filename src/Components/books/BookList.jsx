import BookCard from './BookCard';

const BookList = ({ books }) => {
  return (
    <div className="row justify-content-center">
      <ul id="books" className="list-group col-md-8 col-lg-7">
        {books.map((book) => (
          <BookCard key={book.id} bookInfo={book} />
        ))}
      </ul>
    </div>
  );
};

export default BookList;