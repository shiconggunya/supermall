module.exports ={
  //表示配置Webpack的config
  configureWebpack:{
    //配置路径相关
    resolve:{
      extensions:[],  //引入时不用.js.....
      alias:{        //路径别名
        'assets':'@/assets', // src:@
        'common':'@/common',
        'components':'@/components',
        'network':'@/network',
        'views':'@/views',
      }
    }
   }
}