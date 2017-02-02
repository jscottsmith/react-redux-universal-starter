import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';
import styles from './button.scss';

function Button(props) {
    const className = classnames('btn', styles.btn, {
        [props.className]: props.className,
    });

    if (props.href) {
        return (
            <a
                href={props.href}
                className={className}
            >{props.children}</a>
        );
    } else if (props.mailto) {
        return (
            <a
                href={`mailto:${props.mailto}`}
                className={className}
            >{props.children}</a>
        );
    } else if (props.to && !props.onClick) {
        return (
            <Link
                {...props}
                className={className}
            >{props.children}</Link>
        );
    }
    return (
        <button
            {...props}
            className={className}
        >{props.children}</button>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    href: PropTypes.string,
    mailto: PropTypes.string,
    onClick: PropTypes.func,
    to: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
    ]),
};

export default Button;
