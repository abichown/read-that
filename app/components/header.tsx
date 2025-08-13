import { Link } from 'react-router';

const Header = () => (
  <header>
    <h1>Logo</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/test">Test</Link>
    </nav>
  </header>
);

export default Header;
