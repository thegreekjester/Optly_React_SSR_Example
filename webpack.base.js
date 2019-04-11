//This is the base webpack base that is merged with each webpack config files (server and client)

module.exports = {
    // Tell webpack to run babel on every file it interfaces with 
    module: {
        rules: [
            {
                // This is regex make sure that babel is only being applied to js files
                test: /\.js?$/,
                // Whenever a js file is found, babel will be loaded to convert from jsx to vanilla es5 js
                loader: 'babel-loader',
                // Dont run babel on files that are on the following directories
                exclude: /node_modules/,
                // rules that babel should follow
                options: {
                    presets: [
                        // convert react code to vanilla js
                        'react',
                        // convert some async functionality to vanilla js
                        'stage-0',
                        // run all the different tranform rules to satisfy the needs of the two latest browser versions
                        ['env', { targets: { browsers: ['last 2 versions']}}]
                    ]
                }
            }
        ]
    }

};