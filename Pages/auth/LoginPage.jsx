import { Link, useNavigate } from 'react-router';

import { useAuth } from '../../context/AuthContext';

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (FormData) => {
    const email = FormData.get('email');
    const password = FormData.get('password');
    const credentials = {
      email,
      password,
    };

    await login(credentials);

    navigate('/books');
  };

  return (
    <>
    <div className="row justify-content-center">
    <div className="col-md-8 col-lg-4 text-center border m-3 p-2">
      <h1>Log in to your account</h1>
      <form action={handleLogin}>
        <label className="form-label">
          Email
          <input type='text' className="form-control" name='email' required/>
        </label>
        <label>
          Password
          <input type='password' className="form-control" name='password' required/>
        </label>
        <button type='submit' className="btn btn-outline-primary">Login</button>
      </form>
      <Link to='/register'><b>Need an account? Register here.</b></Link>
      </div>
      </div>
    </>
  );
};

export default LoginPage;