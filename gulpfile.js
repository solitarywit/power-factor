var gulp = require('gulp');
var path = require('path');
var gutil = require('gulp-util');
var nunjucks = require('gulp-nunjucks-html');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
var WebpackDevServer = require("webpack-dev-server");
var wds = null;

gulp.task('html', function() {
    gulp.src(['templates/**/*.html'])
        .pipe(nunjucks({
            searchPaths: ['templates']
        }))
        .pipe(gulp.dest('dist/'))
});

// gulp.task('live-reload-webpack', function () {
//     if (!wds){
//         return false;
//     }
//     console.log('!!!!!!!', wds);
// });

gulp.task('build',['html', 'webpack:build-dev'], function() {
    gulp.watch(['assets/**/*', 'templates/**/*', 'images/**/*'], ['html', "webpack:build-dev"/*, "live-reload-webpack"*/]);
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

    wds = new WebpackDevServer(compiler, {
        publicPath: path.join(__dirname, "dist"),
        contentBase: path.join(__dirname, "dist"),
        open: true,
        inline: true,
        hot: true,
        watchContentBase: true,
        stats: "errors-only",
        port: 8080,
        host: 'localhost'
    }).listen(8080, 'localhost', function (err) {
        if (err) throw new gutil.PluginError('webpack-dev-server', err);
        // Server listening
        gutil.log('[webpack-dev-server]', 'http://localhost:8080/index.html');

        // keep the server alive or continue?
        callback();
    });
});


gulp.task('default', [ 'build', 'webpack-dev-server']);