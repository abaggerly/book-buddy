import { useLoaderData } from 'react-router';

import BookList from '../../Components/books/BookList';

const BooksPage = () => {
  const booksData = useLoaderData() || [];

  const handleSearch = (FormData) => {
    console.log(FormData.get('search'));
  };

  return (
    <>
    <div className="row justify-content-center">
    <div className="list-group col-md-6 col-lg-4 text-center">
      <h1>Catalog</h1>
      <form id='search' action={handleSearch}>
        <div class="input-group mb-3">
        <input name='search' type='search' className ="form-control" placeholder='Search for a book...' />
        <button type='submit' className="btn btn-outline-primary" id="button-addon2">Search</button>
        </div>
      </form>
      </div>
      </div>
      <BookList books={booksData} />
    </>
  );
};

export default BooksPage;