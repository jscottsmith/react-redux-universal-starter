import React, { PropTypes } from 'react';
import cx from 'classnames';
import styles from './Svg.scss';

export default function Svg(props) {
    const { el: Element, style } = props;
    const className = cx('svg-icon', styles.root, {
        [props.className]: props.className,
    });

    return (
        <Element
            className={className}
            dangerouslySetInnerHTML={{ __html: props.svg }}
            style={style}
        />
    );
}

Svg.propTypes = {
    className: PropTypes.string,
    el: PropTypes.string.isRequired,
    style: PropTypes.object,
    svg: PropTypes.string.isRequired,
};

Svg.defaultProps = {
    el: 'span',
};
