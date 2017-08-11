import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Registration from './../authorization/registration'
import store from './../../store/store'

import { withRouter } from 'react-router'
import { connect } from 'react-redux'


const mapStateToProps = function () {
    return {
        data : store.getState()
    }
};

class TopPanel extends Component {
    componentDidMount() {
        toggleAuthModal();
    }

    render() {
        
        return(
            <div className="top-panel">
                <div className="auth__toggle">
                    LOGIN / REGISTER
                </div>
                <div className="auth">
                    <ul className="auth__tabs__controls">
                        <li className="auth__tab__control auth__tab__control--active">Register</li>
                    </ul>
                    <div className="auth__tabs">
                        <Registration />
                    </div>
                </div>
                <Link to="/cabinet" className="personal-cab">User cabinet</Link>
            </div>
        )
    }
}

export default withRouter(connect(
    mapStateToProps
)(TopPanel));

