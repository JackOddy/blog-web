const webpack = require('webpack');
const path    = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const APP_DIR   = path.resolve(__dirname, 'src');
const BUILD_DIR = path.resolve(__dirname, 'build');

export default {
  entry: {
    bundle: `${APP_DIR}/index.jsx`,
    // poppins_regular: `${APP_DIR}/assets/fonts/poppins_regular.ttf`,
    // logo_svg: `${APP_DIR}/assets/png/and_digital_logo.png`,
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include : APP_DIR,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: "style-loader"
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        include: `${APP_DIR}/assets`,
        loader: 'url-loader?name=public/fonts/[name].[ext]?[hash]',
      },
      {
        test: /\.(svg|jpe?g|png)$/,
        include: `${APP_DIR}/assets`,
        loader: 'file-loader?name=public/assets/[name].[hash].[ext]',
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
	plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      excludeChunks: [
        'poppins_regular',
        'logo_svg',
      ],
    }),
  ],
};
