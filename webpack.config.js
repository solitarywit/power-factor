var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: __dirname,
    entry: require('./app/main.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'assets/[name].js',
        publicPath: 'http://localhost:8083/'
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
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'assets/[name].css',
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