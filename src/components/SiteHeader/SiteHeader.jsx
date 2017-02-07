import React, { Component, PropTypes } from 'react';
import { IndexLink } from 'react-router';
import { Svg, SiteNav, Burger } from 'components';
import styles from './SiteHeader.scss';
import logo from '../../../static/logo.svg';

export default class SiteHeader extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
    };

    state = {
        navOpen: false,
    };

    toggle = () => {
        const navOpen = !this.state.navOpen;
        this.setState({
            navOpen,
        });
    };

    render() {
        const { title } = this.props;
        const { navOpen } = this.state;

        return (
            <header className={styles.root}>
                <Svg svg={logo} style={{ height: 50, width: 100, fill: '#CAD2C5' }}/>
                <h1>
                    <IndexLink to="/">{title}</IndexLink>
                </h1>
                <Burger isActive={navOpen} onClick={this.toggle} />
                <SiteNav />
            </header>
        );
    }

}
