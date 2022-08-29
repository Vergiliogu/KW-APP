const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const { merge } = require('webpack-merge')

const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.sass$/,
        use: [
          MiniCssExtractPlugin.loader,
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
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.[contenthash].css',
      ignoreOrder: false,
    }),
  ]
})