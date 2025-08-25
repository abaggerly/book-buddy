import { Link, useNavigate } from 'react-router';

import { useAuth } from '../../context/AuthContext';

const RegisterPage = () => {
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleRegister = async (FormData) => {
    const firstName = FormData.get('firstName');
    const lastName = FormData.get('lastName');
    const email = FormData.get('email');
    const password = FormData.get('password');
    const credentials = {
      firstName,
      lastName,
      email,
      password,
    };

    await register(credentials);

    navigate('/books');
  };

  return (
    <>
    <div className="row justify-content-center">
    <div className="col-md-8 col-lg-4 text-center border m-3 p-2">
      <h1>Register for an account</h1>
      <form action={handleRegister}>
        <label className="form-label">
          First Name
          <input type='text' name='firstName' className="form-control m-2"/>
        </label>
        <label className="form-label" >
          Last Name
          <input type='text' name='lastName' className="form-control m-2"/>
        </label>
        <label className="form-label">
          Email
          <input type='text' name='email' className="form-control m-2"/>
        </label>
        <label className="form-label">
          Password
          <input type='text' name='password' className="form-control m-2"/>
        </label>
        <div className="text-center">
        <button type='submit' className="btn btn-outline-primary">Register</button>
        </div>
      </form>
      <Link to='/login'>Already have an account? Log in here.</Link>
      </div>
      </div>
    </>
  );
};

export default RegisterPage;