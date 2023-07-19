import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authenticationContext } from './Providers/Authcontext';

const Register = () => {
  const { user, createUser } = useContext(authenticationContext)

  const handleRegister = e => {
    e.preventDefault()
    const form = e.target
    const email = form.email.value
    const password = form.password.value
    createUser(email, password)
      .then(result => {
        const signedUpUser = result.user
        console.log(signedUpUser)
      })
      .catch(error => {
        console.log(error)
      })
  }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" name='username' placeholder="username" className="input input-bordered" />
            </div>
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
                <Link to="/Login" className="label-text-alt link link-hover">Already have an account?</Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className='btn btn-primary' type="submit" value="Register" />
            </div>
          </form>

        </div>
      </div>
    </div>
  );
};

export default Register;