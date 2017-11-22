const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: __dirname + "/../src/javascripts/write.js",
  output: {
    path: __dirname + "/../build",
    publicPath: "/assets/",
    filename: 'write.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.styl$/, exclude: /node_modules/, loader: 'style-loader!css-loader!stylus-loader' },
      { test: /\.png$/, loader: "url-loader?limit=100000" }
    ]
  },
  plugins: [
    new UglifyJSPlugin({
      uglifyOptions: {
        compress: {
          warnings: false,
        },
        output: {
          comments: false,
        },
      }
    }),
  ]
};
