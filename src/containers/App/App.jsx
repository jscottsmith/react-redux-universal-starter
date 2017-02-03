import React, { Component, PropTypes } from 'react';
import { IndexLink } from 'react-router';
import Helmet from 'react-helmet';
import {
    isLoaded as isInfoLoaded,
    load as loadInfo,
} from 'redux/modules/info';
import {
    InfoBar,
    SiteNav,
    Svg,
} from 'components';
import config from '../../config';
import { asyncConnect } from 'redux-connect';
import logo from '../../../static/logo.svg';
import styles from './App.scss';
import '../../sass/styles.scss';

@asyncConnect([{
    promise: ({ store: { dispatch, getState } }) => {
        const promises = [];

        if (!isInfoLoaded(getState())) {
            promises.push(dispatch(loadInfo()));
        }

        return Promise.all(promises);
    },
}])

export default class App extends Component {

    static propTypes = {
        children: PropTypes.object.isRequired,
    };

    static contextTypes = {
        store: PropTypes.object.isRequired,
    };

    render() {
        return (
            <main className={styles.app}>
                <Helmet {...config.app.head}/>
                <Svg svg={logo} style={{ height: 50, width: 100, fill: '#CAD2C5' }}/>
                <header>
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
