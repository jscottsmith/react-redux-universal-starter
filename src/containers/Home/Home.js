import React, { Component } from 'react';
import Helmet from 'react-helmet';
const styles = require('./Home.scss');

export default class Home extends Component {
  render() {
    return (
      <div className={styles.home}>
        <Helmet title="Home"/>
        <h1>Home</h1>
      </div>
    );
  }
}
