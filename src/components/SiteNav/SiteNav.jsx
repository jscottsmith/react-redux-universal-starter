import React from 'react';
import { IndexLink, Link } from 'react-router';
import style from './SiteNav.scss';

export default function SiteNav() {
    return (
        <nav className={style.root}>
            <h3>Site Navigation</h3>
            <ul className={style.links}>
                <li><IndexLink to="/">Home</IndexLink></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/404">Four O' Four</Link></li>
            </ul>
        </nav>
    );
}
