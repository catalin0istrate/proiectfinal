const path = require("path");

// Write the folder name for the wip exercise
const exercisePath = "src";


/// no need to edit this!!!

const entryPath = 'proiect/' + exercisePath;

module.exports = {
    mode: "development",
    devtool: "eval-source-map",
    entry: `./${entryPath}/js/app.js`,
    output: {
        filename: "out.js",
        path: path.resolve(__dirname, `${entryPath}/build`)
    },
    devServer: {
        contentBase: path.join(__dirname, `${entryPath}`),
        publicPath: "/build/",
        compress: false,
        port: 3002,
        open: ['/'],

    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            options: {
                "presets": [
                    "@babel/preset-env",
                    "@babel/preset-react"
                ]
            }
        }, {
            test: /\.(css)$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.(s(a|c)ss)$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }, {
            test: /\.(svg|png|jpe?g|gif)$/i,
            loader: 'file-loader',
            options: {
                name: '[name]-[hash].[ext]',
                outputPath: 'build/img/', // file pack output path, is relative path for `dist`
                publicPath: 'build/img/', // css file will use, is absolute path for server
            }
        },]
    }
};
