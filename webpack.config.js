var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: './src/js/scripts.js',    // 1
    output: {                     ///2
        path: path.resolve(__dirname, 'dist'),  //get the relative path of an absolute path
        filename: 'bundle.js',
        publicPath: '/dist'         // dev server public path we
    },
    module : {    // per file
        rules: [
            {
                test: /\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins:[       ///array   prepered code
        new webpack.optimize.UglifyJsPlugin({
            //...
        })
    ]
};