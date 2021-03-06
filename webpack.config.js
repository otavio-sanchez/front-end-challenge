const devConfig = require('./config/webpack.dev.config.js');
const hmgConfig = require('./config/webpack.hmg.config.js');
const prodConfig = require('./config/webpack.prod.config.js');

let config;

switch (process.env.npm_lifecycle_event) {
    case 'start':
        config = devConfig;
        break;
    case 'build-hmg':
        config = hmgConfig;
        break;
    case 'build':
        config = prodConfig;
        break;
    default:
        config = devConfig;
        break;
}

module.exports = config;
