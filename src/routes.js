import React from 'react';
import { IndexRoute, Route } from 'react-router';
// import { isLoaded as isAuthLoaded, load as loadAuth } from 'redux/modules/auth';
import {
    About,
    App,
    Home,
    NotFound,
} from 'containers';

const Routes = () => {
    return (
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            { /* Routes */ }
            <Route path="about" component={About} />
            <Route path="*" component={NotFound} status={404} />
        </Route>
    );
};

export default Routes;
