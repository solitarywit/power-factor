var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: __dirname,
    entry: require('./app/main.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'assets/[name].bundle.js',
        publicPath: 'http://localhost:8080/'
    },
    resolve: {
        extensions: ['.js', '.html', '.css', '.sass', '.scss'],
        modules: [process.cwd(), 'node_modules']
    },
    module: {
        rules: [
            {
                test: require.resolve('jquery'),
                loader: 'expose-loader?$!expose-loader?jQuery'
            }, {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff&name=fonts/[name].[ext]"
            }, {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff&name=fonts/[name].[ext]"
            }, {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?limit=10000&mimetype=application/octet-stream&name=fonts/[name].[ext]"
            }, {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?limit=10000&mimetype=application/vnd.ms-fontobject&name=fonts/[name].[ext]"
            }, {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?limit=10000&mimetype=image/svg&name=fonts/[name].[ext]"
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract([
                    'css-loader',
                    'postcss-loader'
                ])
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract([
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                    {
                        loader: 'sass-resources-loader',
                        query: {resources: 'resources/sass/sass-resources.scss'},
                    }
                ])
            },
            {
                test: /\.(gif|png|jpe?g|svg|pdf|msds)$/i,
                loaders: [
                    'file-loader?name=images/[name].[ext]',
                    //{
                    //    loader: 'image-webpack-loader',
                    //    query: {
                    //        useRelativePath: true,
                    //        mozjpeg: {
                    //            quality: 65
                    //        },
                    //        //progressive: true,
                    //        //optimizationLevel: 7,
                    //        //interlaced: false,
                    //        pngquant: {
                    //            quality: '65-90',
                    //            speed: 4
                    //        },
                    //        output : {
                    //            filename: 'images/[name].[ext]'
                    //        }
                    //    }
                    //}
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'assets/[name].bundle.css',
            allChunks: true
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'Tether': 'tether',
            'window.Tether': 'tether',
            Tooltip: 'exports-loader?Tooltip!bootstrap/js/dist/tooltip',
            Alert: 'exports-loader?Alert!bootstrap/js/dist/alert',
            Button: 'exports-loader?Button!bootstrap/js/dist/button',
            Carousel: 'exports-loader?Carousel!bootstrap/js/dist/carousel',
            Collapse: 'exports-loader?Collapse!bootstrap/js/dist/collapse',
            Dropdown: 'exports-loader?Dropdown!bootstrap/js/dist/dropdown',
            Modal: 'exports-loader?Modal!bootstrap/js/dist/modal',
            Popover: 'exports-loader?Popover!bootstrap/js/dist/popover',
            Scrollspy: 'exports-loader?Scrollspy!bootstrap/js/dist/scrollspy',
            Tab: 'exports-loader?Tab!bootstrap/js/dist/tab',
            Util: 'exports-loader?Util!bootstrap/js/dist/util'
        })
    ]
};