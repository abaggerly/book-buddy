import { Link, useLoaderData, useNavigate } from 'react-router';
import { useAuth } from '../../context/AuthContext';

const BookPage = () => {
  const bookData = useLoaderData();
  const { token } = useAuth();
  const navigate = useNavigate();

  async function handleReserve() {
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
      navigate(`/books/${bookData.id}`);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <main className="d-flex justify-content-center">
      {}
      <div className="container my-5" style={{ maxWidth: 980 }}>
        <div className="row justify-content-center g-4">
          {}
          <div className="col-12 col-md-4 d-flex justify-content-center">
            <figure className="m-0">
              <img
                src={bookData.coverimage}
                alt={`Cover image of ${bookData.title}`}
                className="img-fluid rounded shadow-sm"
                style={{ maxWidth: 260 }}
              />
            </figure>
          </div>

          {}
          <div className="col-12 col-md-7">
            <header className="text-center text-md-start mb-3">
              <h1 className="h3 mb-1">{bookData.title}</h1>
              <p className="text-muted mb-0">{bookData.author}</p>
            </header>

            <section className="text-center text-md-start">
              <p className="lead">{bookData.description}</p>

              {token ? (
                bookData.available ? (
                  <button className="btn btn-primary me-2" onClick={handleReserve}>
                    Reserve this book
                  </button>
                ) : (
                  <button className="btn btn-secondary" disabled>
                    Book is already reserved
                  </button>
                )
              ) : null}

              <Link to="/books" className="btn btn-link">
                ← Back to catalog
              </Link>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BookPage;