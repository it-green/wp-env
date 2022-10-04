const { webpack } = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: {
    'main': path.resolve(__dirname, './theme/js/main.js'),
    'main.css': path.resolve(__dirname, './theme/scss/main.scss')
  },

  // ファイルの出力設定
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, './theme/dist/'),
  },

  module: {
    rules: [
      // sassのコンパイル設定
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ]
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        '**/*',
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