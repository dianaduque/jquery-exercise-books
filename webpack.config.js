const path = require('path');

module.exports = {
    entry: {
        app: "./src/js/index.js"
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {test: /\.css$/, use: ['style-loader', 'css-loader' ]}
        ]
    },
    mode: 'production'
}