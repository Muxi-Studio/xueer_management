var path = require('path')
var webpack = require('webpack')
var config = require('./config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
var env = config.build.env

var webpackConfig = merge(baseWebpackConfig, {
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue': path.resolve(__dirname, 'node_modules/vue/dist/vue.runtime.min'),
            'vue-router': path.resolve(__dirname, 'node_modules/vue-router/dist/vue-router.min'),
        }
    },
    module: {
        noParse: [/vue\.runtime\.min/, /vue-router\.min/,]
    },
    output: {
        path: config.build.assetsRoot,
        publicPath: '/admin/static/',
        filename: '[name].[chunkhash].js',
        chunkFilename: '[id].[chunkhash].js'
    },
    devtool: config.build.productionSourceMap ? '#source-map' : false,
    plugins: [
        // http://vuejs.github.io/vue-loader/en/workflow/production.html
        new webpack.DefinePlugin({
            'process.env': env
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            sourceMap: true
        }),
        // extract css into its own file
        new ExtractTextPlugin({
            filename: 'css/[name].[contenthash].css'
        }),
        // Compress extracted CSS. We are using this plugin so that possible
        // duplicated CSS from different components can be deduped.
        new OptimizeCSSPlugin({
            cssProcessorOptions: {
                safe: true
            }
        })
    ]
})

module.exports = webpackConfig