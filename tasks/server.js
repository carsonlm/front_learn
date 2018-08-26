/*服务器的构建脚本*/
import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-live-server';
import args from './util/args';

gulp.task('server',(cb)=>{
    /*如果没监听回调*/
    if(!args.watch) return cb();

    var server =liveserver.new(['--harmony','server/bin/www']);

    /*监听*/
    gulp.watch(['server/pulibc/**/*.js','server/views/**/*.ejs'],function (file) {
        /*把改动告诉服务器*/
        server.notify.apply(server,[file]);
    })

    /*监听需要重启服务的文件*/
    gulp.watch(['server/routes/**/*.js','server/app.js'],function () {
        server.start.bind(server)()
    });
})