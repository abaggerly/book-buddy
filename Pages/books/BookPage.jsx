import { useLoaderData, useNavigate } from 'react-router';

import { useAuth } from '../../Context/AuthContext';

const BookPage = () => {
  const bookData = useLoaderData();
  const { token } = useAuth();
  const navigate = useNavigate();

  const handleReserve = async () => {
    try {
      await fetch(
        'https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/reservations',
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ bookId: bookData.id }),
        }
      );

      navigate(`/Books/${bookData.id}`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container">
    <div id='book' className="text-center m-3">
      <figure className="">
        <img
          src={bookData.coverimage}
          alt={`cover image of ${bookData.title}`}
        />
      </figure>
      </div>
      <div className="container col-md-8 col-lg-6 border">
      <section className="text-center ">
        <h1>{bookData.title}</h1>
        <p className="lead">{bookData.author}</p>
        <p className="lead">{bookData.description}</p>
        {token ? (
          bookData.available ? (
            <button onClick={handleReserve}>Reserve this book</button>
          ) : (
            <button disabled>Book is already reserved</button>
          )
        ) : (
          <></>
        )}
      </section>
    </div>
    </div>
  );
};

export default BookPage;