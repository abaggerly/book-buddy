// Navbar.jsx
import { NavLink } from "react-router-dom";   // ← fix import
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { token, logout } = useAuth();

  // helper for active link styling (RRv6)
  const linkCx = ({ isActive }) =>
    `text-decoration-none bb-link ${isActive ? "bb-link-active" : ""}`;

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
          <NavLink to="/books" className={linkCx}>Books</NavLink>

          {token ? (
            <>
              <NavLink to="/account" className={linkCx}>Account</NavLink>
              <button
                type="button"
                className="btn btn-link p-0 bb-link"
                onClick={logout}
              >
                Log out
              </button>
            </>
          ) : (
            <NavLink to="/login" className={linkCx}>Log In</NavLink>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;