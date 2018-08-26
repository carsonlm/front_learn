/*处理模板的构建脚本*/
import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args';

/*创建一个任务*/
gulp.task('pages',()=>{
    return gulp.src('app/**/*.ejs')
    /*将文件拷贝到server*/
        .pipe(gulp.dest('server'))
    /*监听是不是更新*/
        .pipe(gulpif(args.watch,livereload()))
})