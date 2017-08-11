/**
 * Created by eugene on 06/08/17.
 */

import React from 'react'
import LoginWarning from './../../components/authorization/loginWarning'

const UsersBalance = ({ eventUsers, eventDonations, users }) => {
    function checkBalance() {
        return <LoginWarning message="you must be logged in to see balance"
                             containerClass="user-balance__total__warning"
                />
        
    }
    
    return (
        <div className="users-balance">
            <h3>Users balance</h3>
            <div className="users-balance__caption">
                <h5>User</h5>
                <h5>Balance</h5>
            </div>
            <div className="users-balance__list">
                
            </div>
            {checkBalance()}
        </div>
    )
};

export default UsersBalance