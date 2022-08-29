const path = require("path")
const { merge } = require('webpack-merge')

const common = require('./webpack.common.js')

const distPath = path.resolve(__dirname, "dist")

module.exports = merge(common, {
  mode: "development",
  devServer: {
    port: 80,
    static: {
      directory: distPath
    },
    compress: true,
    devMiddleware: {
      index: "index.html",
      writeToDisk: false
    },
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.sass$/,
        use: [
          "style-loader",
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  }
})