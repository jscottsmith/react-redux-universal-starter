require('babel-polyfill');

const environment = {
    development: {
        isProduction: false,
    },
    production: {
        isProduction: true,
    },
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
    host: process.env.HOST || 'localhost',
    port: process.env.PORT,
    apiHost: process.env.APIHOST || 'localhost',
    apiPort: process.env.APIPORT,
    app: {
        title: 'React Redux Universal Starter',
        description: 'React redux starter app with universal rendering',
        head: {
            titleTemplate: 'React Redux Universal Starter: %s',
            meta: [
                { name: 'description', content: 'All the modern best practices in one example.' },
                { charset: 'utf-8' },
                { property: 'og:site_name', content: 'React Redux Universal Starter' },
                { property: 'og:image', content: '' },
                { property: 'og:image:width', content: '200' },
                { property: 'og:image:height', content: '200' },
                { property: 'og:locale', content: 'en_US' },
                { property: 'og:title', content: 'React Redux Universal Starter' },
                { property: 'og:description', content: 'All the modern best practices in one example.' },
                { property: 'og:card', content: 'summary' },
                { property: 'og:site', content: '' },
                { property: 'og:creator', content: '' },
            ],
        },
    },

}, environment);
