import React, { Component } from 'react';
import {Link} from '@reach/router';
import { FaUsers } from 'react-icons/fa';

class Navigation extends Component {
    render() {
        const { user, logOutUser } = this.props;

        return (
            <nav className="site-nav family-sans navbar navbar-expand bg-primary navbar-dark higher">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                      <FaUsers className="mr-1"/>Meeting Log
                    </Link>
                    <div className="navbar-nav ml-auto">
                        {user && (
                            <Link className="nav-item nav-link" to="/meetings">
                            meetings
                            </Link>
                        )}
                        {!user && (
                             <Link className="nav-item nav-link" to="/login">
                             log in
                            </Link>
                        )}
                        {!user && (
                              <Link className="nav-item nav-link" to="/register">
                              register
                            </Link>
                        )}
                        {user && (
                            <Link className="nav-item nav-link" to="/login" onClick ={logOutUser}>
                            log out
                            </Link>
                        )}
                        
                    </div>
                </div>
            </nav>
        );
    }
}
export default Navigation;