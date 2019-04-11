// This file is meant to take all necessary files (components and index.js) and load them up via webpack to run them
// on nodeJS, rather than the browser which is taken care of by "webpack.client.js"

const path = require('path');

// import the webpack merge library to merge configs
const merge = require('webpack-merge');

// the base config that is shared between client and server
const baseConfig = require('./webpack.base.js');

// bring in webpackNodeExternals which makes it so we can ignore certain modules from being bundled in the server bundle (more performant this way)
const webpackNodeExternals = require('webpack-node-externals');

// server specific config starts here
const config = {
    // Inform webpack that we're building a bundle for nodeJS specifcally
    target: 'node', 

    // Tell webpack the root file our server application (aka index.js)
    entry: './src/index.js',

    // Tell webpack where to put the output file (aka bundle.js)
    output: {
        filename: 'bundle.js',
        // dirname is referencing the current working directory, this next line is saying "hey, put this bundle.js in the build folder"
        path: path.resolve(__dirname, 'build')
    },

    // this tells webpack to not include libraries into the server side bundle that exist currently in node modules
    externals: [webpackNodeExternals()]
};

// This is merging the base config (from webpack.base.js) and the server config into one big webpack config file
module.exports = merge(baseConfig, config);