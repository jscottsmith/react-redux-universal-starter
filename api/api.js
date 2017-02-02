import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import config from '../src/config';
import * as actions from './actions/index';
import { mapUrl } from 'utils/url.js';
import PrettyError from 'pretty-error';
import http from 'http';

const pretty = new PrettyError();
const app = express();

const server = new http.Server(app);

app.use(session({
    secret: 'react and redux rule!!!!',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60000 },
}));
app.use(bodyParser.json());

app.use((req, res) => {
    const splittedUrlPath = req.url.split('?')[0].split('/').slice(1);

    const { action, params } = mapUrl(actions, splittedUrlPath);

    if (action) {
        action(req, params).then((result) => {
            if (result instanceof Function) {
                result(res);
            } else {
                res.json(result);
            }
        }, (reason) => {
            if (reason && reason.redirect) {
                res.redirect(reason.redirect);
            } else {
                console.error('API ERROR:', pretty.render(reason));
                res.status(reason.status || 500).json(reason);
            }
        });
    } else {
        res.status(404).end('NOT FOUND');
    }
});

if (config.apiPort) {
    const runnable = app.listen(config.apiPort, (err) => {
        if (err) {
            console.error(err);
        }

        const green = '\x1b[34m';
        const red = '\x1b[31m';
        const dim = '\x1b[2m';
        console.log('\n', dim, '==================| API Ready |=================\n');
        console.log(green, `==> 🔮  API is running on port ${config.apiPort}`);
        console.log(green, '==> 💦  Send requests to', red, `http://${config.apiHost}:${config.apiPort}`);
    });
} else {
    console.error('==>     ERROR: No PORT environment variable has been specified');
}
