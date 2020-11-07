import React, { Component } from 'react';
import {Link} from '@reach/router';
class Welcome extends Component {
    render() {
        const { userName, logOutUser } = this.props;

        return (
           <div className="text-center">
               <span className="text-secondary font-weight-bold pl-1">
                Welcome {userName}
               </span>
               ,
               <Link to="/login" className="text-primary font-weight-bold pl-1"  onClick ={logOutUser}>
                   log out
               </Link>
           </div>
        );
    }
}
export default Welcome;