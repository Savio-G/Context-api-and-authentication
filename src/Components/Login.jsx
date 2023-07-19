import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authenticationContext } from './Providers/Authcontext';


const Login = () => {
  const { loggedInUser } = useContext(authenticationContext)

  const handleLogin = e => {
    e.preventDefault()
    const form = e.target
    const email = form.email.value
    const password = form.password.value

    // handling logged in information from Firebase. The LoggedInUser function returns a promise and thus we can use .then and .catch method for success and errors. The loggedInUser function here comes from the context and since here the function is invoked we pass in the required parametres (email and possword) which will complete the function written in the Authcontext page.

    loggedInUser(email, password)
      .then(result => {
        const loggedUser = result.user
        console.log(loggedUser)
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name='email' placeholder="email" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name='password' placeholder="password" className="input input-bordered" required />
              <label className="label">
                <Link to="/Register" className="label-text-alt link link-hover">New here?</Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className='btn btn-primary' type="submit" value="Login" />
            </div>
          </form>

        </div>
      </div>
    </div>
  );
};

export default Login;