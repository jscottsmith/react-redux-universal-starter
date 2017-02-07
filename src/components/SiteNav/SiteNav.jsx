import React, { PropTypes } from 'react';
import { IndexLink, Link } from 'react-router';
import cx from 'classnames';
import style from './SiteNav.scss';

export default function SiteNav(props) {
    const { isOpen } = props;
    const className = cx(style.nav, {
        [style.isOpen]: isOpen,
    });
    return (
        <nav className={className}>
            <ul className={style.links}>
                <li className={style.link}><IndexLink to="/">Home</IndexLink></li>
                <li className={style.link}><Link to="/about">About</Link></li>
                <li className={style.link}><Link to="/404">Four O' Four</Link></li>
            </ul>
        </nav>
    );
}

SiteNav.propTypes = {
    isOpen: PropTypes.bool.isRequired,
};
