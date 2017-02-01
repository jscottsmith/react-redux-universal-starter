import React from 'react';
import { Link } from 'react-router';

export default function SiteNav() {
    return (
        <nav>
            <h3>Site Navigation</h3>
            <ul>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    );
}
