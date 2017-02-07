import React, { PropTypes } from 'react';
import style from './Burger.scss';
import cx from 'classnames';

export default function Burger(props) {
    const { ariaControls, onClick, isActive } = props;
    const className = cx(style.burger, {
        [style.isActive]: isActive,
    });

    return (
        <button
            className={className}
            onClick={onClick}
            aria-controls={ariaControls}
            aria-label={isActive ? 'Close Navigation' : 'Open Navigation'}
        >
            <span className={style.patty} />
        </button>
    );
}

Burger.propTypes = {
    ariaControls: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    isActive: PropTypes.bool.isRequired,
};

Burger.defaultProps = {
    ariaControls: '', // NOTE: This is the ID (e.g. <div id="menu" />) of the element that the burger will control
    onClick: () => console.log('Burger clicked but no click handler supplied'),
    isActive: false, // NOTE: state should be maintained at the parent level
};
