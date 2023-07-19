import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authenticationContext } from './Providers/Authcontext';

const Header = () => {
  const { user, logOut } = useContext(authenticationContext)

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log('logout successful')
      })
      .catch(error => {
        console.log(error)
      })
  }
  return (
    <div className="navbar bg-primary text-primary-content">
      <Link to="/" className="btn btn-ghost normal-case text-xl">daisyUI</Link>
      <Link className="btn btn-ghost normal-case text-xl" to="/">Home</Link>
      <Link className="btn btn-ghost normal-case text-xl" to="/Login">Login</Link>
      <Link className="btn btn-ghost normal-case text-xl" to="/Register">Register</Link>
      {
        user ? <><span>{user.email}</span>
          <button onClick={handleLogOut} className='btn btn-xs'>Log Out</button></>
          : <Link to="/Login">Log In</Link>
      }
    </div >
  );
};

export default Header;