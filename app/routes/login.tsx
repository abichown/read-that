import { Outlet, Link } from 'react-router';

const Login = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <nav>
        <Link to="signin">Sign In</Link>
        <Link to="signup" style={{ marginLeft: 8 }}>
          Sign Up
        </Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Login;
