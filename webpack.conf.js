const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/export_import/get',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'src/export_import/dist')
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'src/export_import/dist'),
        port: 8000
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({title:"hello.world"})
    ]
}