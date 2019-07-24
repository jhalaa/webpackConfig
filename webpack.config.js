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
                    presets: ['@babel/react', '@babel/preset-env'],
                    compact: false
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
        ]
    },
    plugins: [MiniCssExtractPluginConfig]
};
