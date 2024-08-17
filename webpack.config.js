const path = require('path');
const Buffer = require('buffer').Buffer;
const webpack = require('webpack');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');


module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development', // 'production'
  resolve: {
    fallback: {
        "path": require.resolve("path-browserify"),
        "buffer": require.resolve("buffer/"),
        "os": require.resolve("os-browserify"),
        "crypto": require.resolve("crypto-browserify"),
        "stream": require.resolve("stream-browserify"),
        "util": require.resolve("util/"),
        "vm": require.resolve("vm-browserify"),
        "net": require.resolve("net-browserify"),
        "async_hooks": false // Optionally set to false if not needed

    }
  },
  plugins: [
    new webpack.ProvidePlugin({
        Buffer: ['buffer', 'Buffer']
      }),
      new NodePolyfillPlugin()
  ]
};