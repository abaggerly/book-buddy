import { NavLink } from 'react-router';
import { useAuth } from '../Context/AuthContext';

const Navbar = () => {
  const { token, logout } = useAuth();

  return (
    <header className="bb-navbar border-bottom">
      <div className="container bb-container d-flex align-items-center justify-content-between py-2">
        {/* Brand (left) */}
        <NavLink to="/" className="d-flex align-items-center gap-2 text-decoration-none">
          <img src="/vite.svg" alt="Book Buddy logo" className="bb-logo" />
          <span className="fw-semibold text-dark">Book Buddy</span>
        </NavLink>

        {/* Links (right) */}
        <nav className="d-flex align-items-center gap-3">
          <NavLink to="/books" className="text-decoration-none bb-link">Books</NavLink>

          {token ? (
            <>
              <NavLink to="/account" className="text-decoration-none bb-link">Account</NavLink>
              <button className="btn btn-link p-0 bb-link" onClick={logout}>Log out</button>
            </>
          ) : (
            <NavLink to="/login" className="text-decoration-none bb-link">Log In</NavLink>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;