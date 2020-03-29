const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  devServer: {
    host: 'localhost',
    port: 8080,
    proxy: {
      '/api': {
        target: 'https://dev-www.imooc.com',
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
