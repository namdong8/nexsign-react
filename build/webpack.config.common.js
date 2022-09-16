const path = require("path");

module.exports = {
    name : 'React-webpack-setting', // 웹팩 설정 이름
    devtool : 'eval',
    entry:{
        app : ['./src/index.jsx'], 
    },
    resolve : {
        extensions : ['.js', '.jsx']
    },
    output:{
        path: path.join(__dirname, '../dist'),
        filename: 'app.js',
        library: 'NEX_SIGN',
        libraryTarget: 'umd'
    },
    target: ['web', 'es5'],
    module: {
        rules: [
            {
                test: /\.(js|ts|jsx|tsx)(\?.*)?$/,
                exclude: /node_module/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env', '@babel/preset-react'
                    ]
                },
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }
        ]
    }
}