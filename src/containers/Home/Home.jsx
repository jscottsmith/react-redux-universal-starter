import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import styles from './Home.scss';

import { isLoaded as isHomeLoaded, load as loadHome } from 'redux/modules/home';
import { asyncConnect } from 'redux-connect';

@asyncConnect([{
    promise: ({ store: { dispatch, getState } }) => {
        const promises = [];

        if (!isHomeLoaded(getState())) {
            promises.push(dispatch(loadHome()));
        }

        return Promise.all(promises);
    },
}])

@connect(
    state => ({ home: state.home.data }))

export default class Home extends Component {

    static propTypes = {
        home: PropTypes.shape({
            title: PropTypes.string.isRequired,
            subhead: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
        }),
    };

    render() {
        const { subhead, title, content } = this.props.home;
        return (
            <div className={styles.home}>
                <Helmet title="Home"/>
                <h1>{title}</h1>
                <h2>{subhead}</h2>
                <p>
                    {content}
                </p>
            </div>
        );
    }
}
