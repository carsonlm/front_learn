/*让所有的任务自动去完成--即app里到server里*/
import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-util';
import args from './util/args';

gulp.task('browser',(cb)=>{
    if (!args.watch) return cb();

    /*app里的js 发生改变的时候，scripts.js需要启动*/
    gulp.watch('app/**/*.js',['scripts']);

    gulp.watch('app/**/*.ejs',['pages']);
    gulp.watch('app/**/*.css',['css']);


});
