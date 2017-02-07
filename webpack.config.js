const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  devtool: "inline-source-map",
  entry:  __dirname + "/app/app.jsx",
  output: {
    path: "./public/js/",
    publicPath: "/js/",
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: "babel",
      query: {
        presets: ["es2015","react","stage-0"]
      }
    },
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract("css-loader")
    },
    {
      test: /\.jpg$/,
      loader: "file-loader"
    },
    {
        test: /\.png$/,
        loader: "url-loader?limit=100000"
    },
    {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff'
    },
    {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream'
    },
    {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file'
    },
    {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml'
    }
    ]
  },
  devServer: {
    contentBase: "./public",
    colors: true,
    historyApiFallback: true,
    inline: true
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new ExtractTextPlugin("/bundle.css")
],
}

module.exports = config;
