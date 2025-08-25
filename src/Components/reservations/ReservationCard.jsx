import { Link, useNavigate } from 'react-router';
import { useAuth } from '../../context/AuthContext';

const ReservationCard = ({ reservation }) => {
  const { token } = useAuth();
  const navigate = useNavigate();

  const handleReturn = async () => {
    try {
      await fetch(
        `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/reservations/${reservation.id}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      // naive refresh: just send them back to account page
      navigate('/account');
    } catch (err) {
      console.error('Error returning book:', err);
    }
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {/* left side: book info */}
      <div className="text-start">
        <h6 className="mb-1">
          <Link to={`/books/${reservation.bookid}`} className="text-decoration-none">
            {reservation.title}
          </Link>
        </h6>
        <small className="text-muted">{reservation.author}</small>
      </div>

      {/* right side: action */}
      <button onClick={handleReturn} className="btn btn-sm btn-outline-danger">
        Return book
      </button>
    </li>
  );
};

export default ReservationCard;