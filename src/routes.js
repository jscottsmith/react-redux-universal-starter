import React from 'react';
import { IndexRoute, Route } from 'react-router';
// import { isLoaded as isAuthLoaded, load as loadAuth } from 'redux/modules/auth';
import {
    App,
    Home,
    NotFound,
  } from 'containers';

export default () => {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>

      { /* Routes */ }
      { /* <Route path="about" component={About}/> */ }

      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
};
