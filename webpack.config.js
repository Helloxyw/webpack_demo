var path = require('path');

//导入插件
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
    entry:{
        //单文件入口
        main: './main'
    },
    output:{   //打包后的文件会存储为demo/dist/main.js  只要在html中引用它即可
        //存放打包后文件的输出目录,必填项
        path :path.join(__dirname,'./dist'),
        //指定资源文件引用的目录
        publicPath: '/dist/',
        //指定输出文件的名称
        filename: 'main.js'
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use:ExtractTextPlugin.extract({
                   use: 'css-loader',
                   fallback:'style-loader'
                })
            }
        ]
    },
    plugins:[
        //重命名提取后的css文件
        new ExtractTextPlugin("main.css")
    ]
};

module.exports = config;
