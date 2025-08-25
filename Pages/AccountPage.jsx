import { Link, useLoaderData } from 'react-router';

import { useAuth } from '../context/AuthContext';

import ReservationsList from '../Components/reservations/ReservationsList';

const AccountPage = () => {
  const { token } = useAuth();
  const accountData = useLoaderData();

  return (
    <>
      {token ? (
        <>
          <header className="text-center">
            <h1>Welcome, {accountData.firstname}!</h1>
            <p className="text-center">Your email on file with us is {accountData.email}.</p>
          </header>
          <section className="border">
            <h2>Your reservations</h2>
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
        <p>
          Please <Link to='/login'>log in</Link> to see your account.
        </p>
      )}
    </>
  );
};

export default AccountPage;