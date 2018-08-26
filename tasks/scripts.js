import gulp from 'gulp';
import gulpif from 'gulp-if';
import concat from 'gulp-concat';
import webpack from 'webpack';
import gulpwebpack from 'webpack-stream';
import named from 'vinyl-named';
import livereload from 'gulp-livereload';
import plumber from 'gulp-plumber';/*文科信息流*/
import rename from 'gulp-rename';
import uglify from 'gulp-uglify';/*压缩*/
import {log,colors} from 'gulp-util';
import args from './util/args';

gulp.task('scripts',()=>{
    /*打开文件*/
    return gulp.src(['app/js/index.js'])
    /**/
        .pipe(plumber({errorHandler:function () {

            }}))
    /*从命名*/
        .pipe(named())
    /*对js进行编译*/
        .pipe(gulpwebpack({
            module:{
                loaders:[{
                    test:/\.js$/,
                    loader:'babel'
                }]
            }
        }),null,(err,stats)=>{
            /*处理错误*/
            log(`Finished '${colors.cyan('scripts')}'`,stats.toString({
                chunks:false
            }))
        })
    /*编译完放在哪里*/
        .pipe(gulp.dest('server/public/js'))
        /*处理编译压缩的过程. 重命名..以及最后存储位置*/
        .pipe(rename({
            basename:'cp',
            extname:'.min.js'
        }))
        .pipe(uglify({
            compress:{
                properties:false
            },
            output:{
                quote_keys:true
            }
        }))
        .pipe(gulp.dest('server/public/js'))
    /*判断有更新则刷新*/
        .pipe(gulpif(args.watch,livereload()))
})

