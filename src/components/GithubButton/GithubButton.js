import React from 'react';

const GithubButton = (props) => {
    const { user, repo, type, width, height, count, large } = props;
    let src = `https://ghbtns.com/github-btn.html?user=${user}&repo=${repo}&type=${type}`;
    if (count) {
        src = src + '&count=true';
    }
    if (large) {
        src = src + '&size=large';
    }

    return (
        <iframe
            src={src}
            frameBorder="0"
            allowTransparency="true"
            scrolling="0"
            width={width}
            height={height}
            style={{ border: 'none', width: width, height: height }} />
    );
};

GithubButton.propTypes = {
    count: React.PropTypes.bool,
    height: React.PropTypes.number.isRequired,
    large: React.PropTypes.bool,
    repo: React.PropTypes.string.isRequired,
    type: React.PropTypes.oneOf(['star', 'watch', 'fork', 'follow']).isRequired,
    user: React.PropTypes.string.isRequired,
    width: React.PropTypes.number.isRequired,
};

export default GithubButton;
