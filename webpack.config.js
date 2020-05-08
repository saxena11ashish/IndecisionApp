const path = require('path');
// core things required for webpack-config-file
// 1. entry | 2. output
module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules:[{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_module s/
    }]    
  },
  devtool:'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public')
  }
};
