// This file is meant to take all necessary files (components and index.js) and load them up via webpack to run them
// on the browser which is taken care of by "webpack.client.js"

const path = require('path');

// import the webpack merge library to merge configs
const merge = require('webpack-merge');

// the base config that is shared between client and server
const baseConfig = require('./webpack.base.js');


const config = {

    // Tell webpack the root file our client side bundle application (aka client.js)
    entry: './src/client/client.js',

    // Tell webpack where to put the output file (aka bundle.js)
    output: {
        filename: 'bundle.js',
        // dirname is referencing the current working directory, this next line is saying "hey, put this bundle.js in the public folder"
        // The public folder is available to the public (lol pun) so it should not contain API tokens/secrets
        path: path.resolve(__dirname, 'public')
    }
};

// This is merging the base config and the server config into one big webpack config file
module.exports = merge(baseConfig, config);