var path = require('path')
var config = require('./config')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
var webpack = require('webpack')
// var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

process.noDeprecation = true

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    entry: {
        main: './src/main.js',
        vueVendor: ['vue','vue-router'],
    },
    output: {
        path: path.join(__dirname, "./"),
        filename: '[name].js',
        publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath
    },
   	module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                cssModules: {
                    localIdentName: '[name]-[local]-[hash:base64:5]',
                    camelCase: true
                }
            }
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.(html|tpl)$/,
            loader: 'html-loader'
        }, {
            test: /\.(png|jpg|gif|svg)$/,
            loader: 'file-loader',
            query: {
                name: '[name].[ext]?[hash]'
            }
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }, 
        {
            test: /\.scss$/,
            loaders: ["style-loader", "css-loader", "sass-loader"]
        },
        {
            test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
            loader: 'file-loader'
        }]
    },
    plugins: [
    	// new BundleAnalyzerPlugin(),
        // split vendor js into its own file
   //      new webpack.optimize.CommonsChunkPlugin({
   //          name: 'vue-vendor',
   //          filename: 'vue-vendor.js',
   //          minChunks: ({ resource }) => (
			//     resource &&
			//     resource.indexOf('node_modules') >= 0 &&
			//     (resource.match(/vue/) || resource.match(/vue-router/) || resource.match(/react/) || resource.match(/react-dom/))
			// ),
   //      }),
   //      new webpack.optimize.CommonsChunkPlugin({
   //          name: 'react-vendor',
   //          filename: 'react-vendor.js',
   //          minChunks: ({ resource }) => (
			//     resource &&
			//     resource.indexOf('node_modules') >= 0 &&
			//     (resource.match(/react/) || resource.match(/react-dom/))
			// ),
   //      }),
   		new webpack.optimize.CommonsChunkPlugin({
            name: 'vue-vendor',
            chunks: ['vueVendor','main']
        }),
   		// new webpack.optimize.CommonsChunkPlugin({
     //        name: 'react-vendor',
     //        chunks: ['reactVendor','editor']
     //    }),
        // extract webpack runtime and module manifest to its own file in order to
        // prevent vendor hash from being updated whenever app bundle is updated
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            minChunks: Infinity
        }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'vueCommon',
        //     chunks: ['vue','main']
        // }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'reactCommon',
        //     chunks: ['react','editor']
        // }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        // new HtmlWebpackPlugin({
        // 	alwaysWriteToDisk: true,
        //     filename: './templates/editor.html',
        //     inject: false,
        //     template: path.join(__dirname, './templates/editor.ejs'),
        //     chunks:['manifest','react-vendor','editor']
        // }),
        new HtmlWebpackPlugin({
        	alwaysWriteToDisk: true,
            filename: './templates/home.html',            
            inject: false,
            template: path.join(__dirname, './templates/home.ejs'),
            chunks:['manifest','vue-vendor','main']
        }),
        new HtmlWebpackHarddiskPlugin()
    ]
}