import { Link } from 'react-router';

const BookCard = ({ bookInfo }) => {
  return (
    <li className="book list-group-item d-flex gap-3 align-items-start p-3">
      {/* Left: cover image */}
      <img
        src={bookInfo.coverimage}
        alt={`Cover image of ${bookInfo.title}`}
        className="img-thumbnail"
        style={{ width: "80px", height: "auto", objectFit: "cover" }}
      />

      {/* Right: text content */}
      <div className="flex-grow-1 text-start">
        <h5 className="mb-1">
          <Link to={`/books/${bookInfo.id}`} className="text-decoration-none text-primary fw-bold">
            {bookInfo.title}
          </Link>
        </h5>
        <p className="mb-1 fw-semibold">{bookInfo.author}</p>
        <p className="mb-0 text-muted small">{bookInfo.description}</p>
      </div>
    </li>
  );
};

export default BookCard;