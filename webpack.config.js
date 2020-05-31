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
    rules:[
      {
        test: /\.js$/,
        loader: 'babel-loader',//single loader
        exclude: /node_modules/
      },
      {
        test: /\.s?css$/,
        use: [  // USE when using more than 1 loader,loaders given in array
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]    
  },
  devtool:'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public')
  }
};
