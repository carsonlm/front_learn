/*处理命令行参数*/
import yargs from 'yargs';

/*false是开发环境*/
    const args=yargs
    .option('production',{boolean:true,default:false,descripbe:'min all scripts'})

    /*监听更改文件，自动编译*/
    .option('watch',{boolean:true,default:false,descripbe:'watch all files'})

    /*要不要详细输出命令行的日志*/
    .option('verbose',{boolean:true,default:false,descripbe:'log'})

    .option('sourcemaps',{descripbe:'force thr creation of sourcemaps'})

    .option('port',{string:true,default:8080,descripbe:'server port'})
    /*表示对输入的命令行以字符串解析*/
    .argv

