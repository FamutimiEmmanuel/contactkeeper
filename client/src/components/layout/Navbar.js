import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import authContext from '../../context/auth/authContext';
import contactContext from '../../context/contact/contactContext';

const Navbar = ({ title, icon }) => {
    const AuthContext = useContext(authContext);
    const ContactContext = useContext(contactContext);

    const { isAuthenticated, logout, user } = AuthContext;
    const { clearContacts } = ContactContext;

    const onLogout = () => {
        logout();
        clearContacts();
    }
    const authLinks = (
        <>
          <li>Hello { user && user.name }</li>
          <li>
              <a onClick={onLogout} href="#!">
                  <i className="fas fa-sign-out-alt"></i>
                  <span className="hide-sm">Logout</span>
              </a>
          </li>
        </>
    );

    const guestLinks = (
        <>
          <li>
                    <Link to='/register'>Register</Link>
                </li>
                <li>
                    <Link to='/login'>Login</Link>
                </li>
        </>
    );

    return (
        <div className="navbar"  style={{backgroundColor:'rgb(150, 195, 200)'}} >
            <h1>
             <i className={icon}/> {title}    
            </h1>  
            <ul>
                {/* <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/register'>Register</Link>
                </li>
                <li>
                    <Link to='/login'>Login</Link>
                </li> */}
                {isAuthenticated ? authLinks : guestLinks}
            </ul>          
        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon:PropTypes.string,
}

Navbar.defaultProps = {
    title: 'Contact Keeper',
    icon: 'fas fa-id-card-alt'
}

export default Navbar
