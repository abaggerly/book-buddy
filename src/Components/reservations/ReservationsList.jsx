import ReservationCard from './ReservationCard';

const ReservationsList = ({ reservations }) => {
  return (
    <ul id="reservations" className="list-group text-center">
      {reservations.map((reservation) => (
        <ReservationCard key={reservation.id} reservation={reservation} />
      ))}
    </ul>
  );
};

export default ReservationsList;