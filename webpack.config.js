const { webpack } = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { SourceMap } = require('module');

module.exports = {
  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: {
    'main': path.resolve(__dirname, './theme/js/main.js'),
    'main.css': path.resolve(__dirname, './theme/scss/style.scss')
  },

  // ファイルの出力設定
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, './theme/assets/'),
  },

  module: {
    rules: [
      // sassのコンパイル設定
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'resolve-url-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ],
      }
    ]
  },

  optimization: {
    minimizer: [new TerserPlugin({
      extractComments: false,
    })],
  },

  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        'css/**/*',
        'js/**/*',
      ],
    }),
    new FixStyleOnlyEntriesPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name]'
    }),
  ],

  watchOptions: {
    ignored: /node_modules/
  }
};