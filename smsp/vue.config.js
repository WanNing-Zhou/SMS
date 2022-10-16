const {
  defineConfig
} = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    port: 9527, //端口号
    host: "localhost", //主机名,127.0.0.1
    https: false, //协议
    open: true //启动服务器时自动打开浏览器
  },
  lintOnSave: false, //关闭格式检查
  transpileDependencies: true
})