var path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    devtool: "source-map",
    entry: {
        app: './app/index.tsx',
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: "styles",
                    type: "css/mini-extract",
                    chunks: "all",
                    enforce: true,
                },
            },
        },
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: "ts-loader",   // определяем загрузчик
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            esModule: false,
                        },
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: "[name]__[local]--[hash:base64:5]",
                            },
                        },
                    },
                ],
            }, {
                test: /\.svg$/,
                use: [
                  {
                    loader: "babel-loader"
                  },
                  {
                    loader: "react-svg-loader",
                    options: {
                      jsx: true // true outputs JSX tags
                    }
                  }
                ]
              }
        ]
    },
    plugins: [new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css",
    })],
    devServer: {
        compress: true,
        port: 9000,
        historyApiFallback: true,
        proxy: [
            {
                context: '/api',
                target: 'http://localhost:3000/',
                pathRewrite: { '^/api': '' },
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: {
            "$components": path.resolve(__dirname, 'app/components'),
            "$selectors": path.resolve(__dirname, 'app/selectors'),
            "$constants": path.resolve(__dirname, 'app/constants'),
            "$ducks": path.resolve(__dirname, 'app/ducks'),
            "$models": path.resolve(__dirname, 'app/models'),
            "$types": path.resolve(__dirname, 'app/types'),
        }
    },
}