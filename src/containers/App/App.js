import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { IndexLink } from 'react-router';
import Helmet from 'react-helmet';
import { isLoaded as isInfoLoaded, load as loadInfo } from 'redux/modules/info';
import { isLoaded as isAuthLoaded, load as loadAuth, logout } from 'redux/modules/auth';
import { InfoBar } from 'components';
import { push } from 'react-router-redux';
import config from '../../config';
import { asyncConnect } from 'redux-async-connect';

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
    // const {user} = this.props;
        const styles = require('./App.scss');

        return (
            <div className={styles.app}>
                <Helmet {...config.app.head}/>

                <IndexLink to="/" activeStyle={{ color: '#33e0ff' }}>
                    <h1>{config.app.title}</h1>
                </IndexLink>

                <div className={styles.appContent}>
                    {this.props.children}
                </div>

                <InfoBar/>
            </div>
        );
    }
}
