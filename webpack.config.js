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
            },
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
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        alias: {
            "$components": path.resolve(__dirname, 'app/components'),
        }
    },
}