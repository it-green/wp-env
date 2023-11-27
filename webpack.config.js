const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
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
            loader: 'css-loader',
            options: {
              url: true,
              sourceMap: true,
              importLoaders: 2
            },
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
              sourceMap: true,
            }
          },
        ],
      }
    ]
  },

  optimization: {
    minimizer: [new TerserPlugin({
      extractComments: true,
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

    new BrowserSyncPlugin({
      host: 'localhost',
      files: ['./**/*'],
      port: 3000,
      proxy: {
        target: 'http://localhost:10011',
      },
      watchOptions: {
        ignored: ['webpack.config.js', 'node_modules', 'sql', 'package.json', 'package-lock.json', 'php.ini', 'readme.md'],
      },
      open: true,
      ghostMode: {
        clicks: false,
        forms: false,
        scroll: false,
      },
      logLevel: 'debug',
    }),
  ],
};