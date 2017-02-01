import React from 'react';
import { IndexLink } from 'react-router';

export default function NotFound() {
    return (
        <div className="container">
            <h1>404: Page Not Found</h1>
            <p>Head back <IndexLink to="/">home</IndexLink>.</p>
        </div>
    );
}
