const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  devServer: {
    host: 'localhost',
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://mall-pre.springboot.cn',
        changeOrigin: true,
        pathRewrite: {
          api: ''
        }
      }
    }
  },
  configureWebpack: {
    name: 'xiaomi',
    resolve: {
      alias: {
        '@': resolve('src'),
        _c: resolve('src/components')
      }
    }
  }
}
