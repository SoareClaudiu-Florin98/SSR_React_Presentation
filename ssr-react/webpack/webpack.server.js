const path = require('path')
const webpackNodeExternals = require('webpack-node-externals')
const LoadablePlugin = require('@loadable/webpack-plugin')

module.exports = {
  mode: 'development',
  target: 'node',
  entry: path.resolve(__dirname, '..', './src/server/server.ts'),
  devtool: 'source-map',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|ico)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[hash][ext][query]'
        }
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[hash][ext][query]'
        }
      },
      {
        test: /\.svg$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[hash][ext][query]'
        }
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
        }
      },
      { test: /\.(scss|css)$/, loader: "ignore-loader" }    
    ],
  },

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '..', './dist/server'),
  },
  plugins: [new LoadablePlugin()],
  externals: [webpackNodeExternals()],
}
