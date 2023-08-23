const webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
    mode: 'production',
    devtool: 'source-map',
    module: {
        rules: [
          {
            test: /\.(sa|sc|c)ss$/,
            use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
          },
        ],
      },
      optimization: {
        minimizer: [
          new CssMinimizerPlugin(),
        ],
      },
    plugins: [
        new webpack.DefinePlugin({
            //'process.env.name': JSON.stringify("ProdName")
        }),
        new MiniCssExtractPlugin()
    ]
}