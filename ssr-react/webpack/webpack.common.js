const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const LoadablePlugin = require('@loadable/webpack-plugin')

module.exports = {
  entry:  path.resolve(__dirname, '..','./src/index.tsx'),
  devtool: 'inline-source-map',
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use:[
            {
                loader:"babel-loader"
            }
        ]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ['style-loader', 'css-loader','sass-loader']
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
      }
    ],
  },

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '..','./dist/client'),
  },
  plugins:[
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname,'..','./public/index.html'),
        filename: "index.html",
        favicon: path.resolve(__dirname,'..','./public/favicon.ico'),
        manifest: path.resolve(__dirname,'..','./public/manifest.json'),
    }),
    new CopyPlugin({
      patterns: [
        {from: path.resolve(__dirname,'..','./public/manifest.json'), to:"manifest.json"}
      ]
    }),
    new LoadablePlugin()
  ]
};