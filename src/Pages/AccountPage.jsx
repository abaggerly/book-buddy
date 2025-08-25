import { Link, useLoaderData } from 'react-router';
import { useAuth } from '../context/AuthContext';
import ReservationsList from '../Components/reservations/ReservationsList';

const AccountPage = () => {
  const { token } = useAuth();
  const accountData = useLoaderData();

  return (
    <div className="d-flex justify-content-center align-items-start min-vh-100">
      <div className="container my-5" style={{ maxWidth: '700px' }}>
        {token ? (
          <>
            <header className="text-center mb-4">
              <h1>Welcome, {accountData.firstname}!</h1>
              <p>Your email on file with us is {accountData.email}.</p>
            </header>

            <section className="border rounded p-4 bg-light text-center shadow-sm">
              <h2 className="mb-3">Your reservations</h2>
              {accountData.reservations.length === 0 ? (
                <p>
                  You have not reserved any books yet. Browse{' '}
                  <Link to={'/books'}>our catalog</Link>!
                </p>
              ) : (
                <ReservationsList reservations={accountData.reservations} />
              )}
            </section>
          </>
        ) : (
          <p className="text-center">
            Please <Link to="/login">log in</Link> to see your account.
          </p>
        )}
      </div>
    </div>
  );
};

export default AccountPage;