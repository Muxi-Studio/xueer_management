'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  proxyTable: {
    '/api': {
      target: 'https://xueer.muxixyz.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/api'
      }
    }
  }
})
