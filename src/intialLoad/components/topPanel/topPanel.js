import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Registration from './../authorization/registration'
import store from './../../store/store'

import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import Login from "../authorization/login";


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
                <Link to="/cabinet" className="personal-cab">User cabinet</Link>
            </div>
        )
        
    }
}

export default withRouter(connect(
    mapStateToProps
)(TopPanel));

