const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const MiniCssExtractPluginConfig = new MiniCssExtractPlugin({
    filename: 'style.[hash].css'
})

module.exports = {
    mode: "development",
    devtool: "none",
    entry: "./src/index.js",
    output: {
        filename: "main.[hash].js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    // have some version issues and could not use 'es2015', 'react'
                    // as specified in the example link provided. Get error Plugin/Preset files are not allowed to export objects, only functions
                    //this work around works - INVESTIGATE FURTHER
                    presets: ['@babel/react', '@babel/preset-env']
                }
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            },
            {
                test: /\.(jpeg|jpg|png|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                    }
                ]
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            // 1mb === 1000000-1 bytes
                            limit: 999999
                        }
                    }
                ]
            }
        ]
    },
    plugins: [MiniCssExtractPluginConfig]
};
