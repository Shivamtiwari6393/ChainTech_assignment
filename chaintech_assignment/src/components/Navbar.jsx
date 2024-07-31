
// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import '../styles/Nav.css';

const Navbar = () => {
  return (
    <nav className="nav">
        <Link to="/">Registration</Link>
        <Link to="/login">Login</Link>
    </nav>
  );
};

export default Navbar;

