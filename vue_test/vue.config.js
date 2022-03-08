// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,
//   lintOnSave: false
// })
module.exports = {
  pages: {
    index: {
      // entry for the page
      // entry: 'src/main.js',
      entry:'09_src_TodoList_本地存储/main.js'
    },
  },
  lintOnSave: false,//语法检查
  // //开启代理服务器  方式一
  // devServer: {
  //   proxy: 'http://localhost:5000'
  // }

  //开启代理服务器 方式二
  devServer: {
    proxy: {
      '/atguigu': {
        target: 'http://localhost:5000',
        pathRewrite: {'^/atguigu' : ''},
        ws: true,//用于支持websocket
        changeOrigin: true//用于控制请求头中的host值
      },
      '/demo': {
        target: 'http://localhost:5001',
        pathRewrite: {'^/demo' : ''},
        ws: true,//用于支持websocket
        changeOrigin: true//用于控制请求头中的host值
      }
      
    }
  }
}