import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { IndexLink } from 'react-router';
import Helmet from 'react-helmet';
import { isLoaded as isInfoLoaded, load as loadInfo } from 'redux/modules/info';
import { isLoaded as isAuthLoaded, load as loadAuth, logout } from 'redux/modules/auth';
import { InfoBar, SiteNav } from 'components';
import { push } from 'react-router-redux';
import config from '../../config';
import { asyncConnect } from 'redux-async-connect';

import logo from '../../../static/logo.png';
import styles from './App.scss';
import '../../sass/styles.scss';

@asyncConnect([{
    promise: ({ store: { dispatch, getState } }) => {
        const promises = [];

        if (!isInfoLoaded(getState())) {
            promises.push(dispatch(loadInfo()));
        }
        if (!isAuthLoaded(getState())) {
            promises.push(dispatch(loadAuth()));
        }

        return Promise.all(promises);
    },
}])

@connect(
    state => ({ user: state.auth.user }),
    { logout, pushState: push })

export default class App extends Component {

    static propTypes = {
        children: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired,
        pushState: PropTypes.func.isRequired,
        user: PropTypes.object,
    };

    static contextTypes = {
        store: PropTypes.object.isRequired,
    };

    componentWillReceiveProps(nextProps) {
        if (!this.props.user && nextProps.user) {
            // login
            this.props.pushState('/loginSuccess');
        } else if (this.props.user && !nextProps.user) {
            // logout
            this.props.pushState('/');
        }
    }

    handleLogout = (event) => {
        event.preventDefault();
        this.props.logout();
    };

    render() {
        return (
            <main className={styles.app}>
                <Helmet {...config.app.head}/>
                <header>
                    <img src={logo} width="80" height="80" alt="" />
                    <h1>
                        <IndexLink to="/">{config.app.title}</IndexLink>
                    </h1>
                    <SiteNav />
                </header>
                <div className={styles.appContent}>
                    {this.props.children}
                </div>
                <InfoBar />
            </main>
        );
    }

}
