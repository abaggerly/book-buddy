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

      navigate('/account');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <li className='reservation'>
      <Link to={`/books/${reservation.bookid}`}>{reservation.title}</Link>
      <p>{reservation.author}</p>
      <button onClick={handleReturn}>Return book</button>
    </li>
  );
};

export default ReservationCard;