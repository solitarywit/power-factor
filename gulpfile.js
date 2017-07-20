var gulp = require('gulp');
var path = require('path');
var gutil = require('gulp-util');
var nunjucks = require('gulp-nunjucks-html');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
var WebpackDevServer = require("webpack-dev-server");
var DATA = require('./data/global');
var config = require('./webpack.config');

gulp.task('html:en', function() {
    gulp.src(['templates/**/*.html'])
        .pipe(nunjucks({
            searchPaths: ['templates'],
            locals: DATA.en
        }))
        .pipe(gulp.dest('dist/'))
});

gulp.task('html:ru', function() {
    gulp.src(['templates/**/*.html'])
        .pipe(nunjucks({
            searchPaths: ['templates'],
            locals: DATA.ru
        }))
        .pipe(gulp.dest('dist/ru'))
});

gulp.task('build',['html:en','html:ru', 'webpack:build-dev'], function() {
    gulp.watch(['assets/**/*', 'data/*', 'templates/**/*', 'images/**/*'], ['html:en', 'html:ru', "webpack:build-dev"]);
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
//# -----your-webpack-dev-server------------------
    var server = new WebpackDevServer(webpack(config), {
        publicPath:  path.join(__dirname, "dist"),
        contentBase: path.join(__dirname, "dist"),
        watchContentBase: true,
        hot: true,
        quiet: false,
        noInfo: false,
        inline: true,
        port: 8080,
        stats: { colors: true }
    });

    server.listen(8080, "localhost", function() {
        gutil.log('[webpack-dev-server]', 'http://localhost:8080/index.html');
    });
});


gulp.task('default', [ 'build', 'webpack-dev-server']);