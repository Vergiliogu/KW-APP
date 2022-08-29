const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

const distPath = path.resolve(__dirname, "dist")
const srcPath = path.resolve(__dirname, "src")

module.exports = {
  entry: path.join(srcPath, "index.jsx"),
  output: {
    filename: "bundle.[fullhash].js",
    path: distPath,
    clean: true
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "@components": '/src/components/',
      "@utils": '/src/utils/',
      "@constants": '/src/constants/',
      "@services": '/src/services/',
      "@contexts": '/src/contexts/',
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)(tests)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.template.html",
      title: "KW Super App"
    })
  ]
}