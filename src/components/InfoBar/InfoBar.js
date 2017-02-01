import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { load } from 'redux/modules/info';
import styles from './InfoBar.scss';

@connect(
    state => ({ info: state.info.data }),
    dispatch => bindActionCreators({ load }, dispatch))

export default class InfoBar extends Component {

    static propTypes = {
        info: PropTypes.object,
        load: PropTypes.func.isRequired,
    }

    render() {
        const { info, load } = this.props; // eslint-disable-line no-shadow
        const message = info ? info.message : 'no info!';
        const time = info && new Date(info.time).toString();
        return (
            <footer className={styles.infoBar + ' well'}>
                <p>
                    This is an info bar <strong>{message}</strong> <span className={styles.time}>{time}</span> <button className="btn btn-primary" onClick={load}>Reload from server</button>
                </p>
            </footer>
        );
    }

}
