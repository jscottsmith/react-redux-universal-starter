import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import {
    isLoaded as isInfoLoaded,
    load as loadInfo,
} from 'redux/modules/info';
import {
    InfoBar,
    SiteHeader,
} from 'components';
import config from '../../config';
import { asyncConnect } from 'redux-connect';
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
                <SiteHeader title={config.app.title} />
                <div className={styles.appContent}>
                    {this.props.children}
                </div>
                <InfoBar />
            </main>
        );
    }

}
