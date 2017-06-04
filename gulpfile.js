var gulp = require('gulp');
var gutil = require('gulp-util');
var nunjucks = require('gulp-nunjucks-html');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
var WebpackDevServer = require("webpack-dev-server");

gulp.task('html', function() {
    gulp.src(['templates/**/*.html'])
        .pipe(nunjucks({
            searchPaths: ['templates']
        }))
        .pipe(gulp.dest('dist/'))
});

gulp.task('build',['html', 'webpack:build-dev'], function() {
    gulp.watch(['assets/**/*', 'templates/**/*', 'images/**/*'], ['html', "webpack:build-dev"]);
});

gulp.task("webpack:build-dev", function(callback) {
    // run webpack
    webpack(webpackConfig).run(function(err, stats) {
        if(err) throw new gutil.PluginError("webpack:build-dev", err);
        gutil.log("[webpack:build-dev]", stats.toString({
            colors: true
        }));
        callback();
    });
});

gulp.task('webpack-dev-server', function(callback) {
    // Start a webpack-dev-server
    var compiler = webpack(webpackConfig);

    new WebpackDevServer(compiler, {
        publicPath: 'dist',
        contentBase: 'dist',
        open: true,
        inline: true,
        hot: true
    }).listen(8083, 'localhost', function (err) {
        if (err) throw new gutil.PluginError('webpack-dev-server', err);
        // Server listening
        gutil.log('[webpack-dev-server]', 'http://localhost:8083/index.html');

        // keep the server alive or continue?
        // callback();
    });
});


gulp.task('default', [ 'build', 'webpack-dev-server']);