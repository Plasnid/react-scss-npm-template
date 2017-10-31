var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    //App: './src/scripts/App.js'
    App: './src/scripts/carpentry.js'
  },
  output: {
    filename: './dist/scripts/[name].js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css-loader!sass-loader')
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('dist/styles/main.css', {
      allChunks: true
    })
  ]
};
