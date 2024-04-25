const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");
const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const WebpackWatchedGlobEntries = require("webpack-watched-glob-entries-plugin");

module.exports = {
  mode: "development",
  devtool: "source-map",
  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: WebpackWatchedGlobEntries.getEntries([
    path.resolve(__dirname, "my-theme/js/entry/**/*.js"),
    path.resolve(__dirname, "my-theme/scss/style.scss"),
  ]),

  // ファイルの出力設定
  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "./my-theme/assets/"),
  },

  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
          },
        ],
      },
      // sassのコンパイル設定
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              url: true,
              sourceMap: true,
              importLoaders: 2,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [["autoprefixer", { grid: true }]],
              },
            },
          },
          {
            loader: "resolve-url-loader",
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        // 対象となるファイルの拡張子
        test: /\.(gif|svg|eot|wof|woff|ttf)$/,
        type: "asset",
        generator: {
          filename: "css/resources/[hash][ext][query]",
        },
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024, // 4kb
          },
        },
      },
      {
        // 対象となるファイルの拡張子
        test: /\.(webp|png|jpg|jpeg)$/,
        type: "asset",
        generator: {
          filename: "css/resources/[hash].webp[query]",
        },
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024, // 4kb
          },
        },
      },
    ],
  },

  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
      new CssMinimizerPlugin(),
    ],
    minimize: true,
  },

  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["css/**/*", "js/**/*"],
    }),

    new FixStyleOnlyEntriesPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    }),

    new WebpackWatchedGlobEntries(),

    new BrowserSyncPlugin({
      host: "localhost",
      files: ["./**/*"],
      port: 3000,
      proxy: {
        target: "http://localhost:10011",
      },
      watchOptions: {
        ignored: [
          "webpack.config.js",
          "node_modules",
          "sql",
          "package.json",
          "package-lock.json",
          "php.ini",
          "readme.md",
        ],
      },
      open: false,
      ghostMode: {
        clicks: false,
        forms: false,
        scroll: false,
      },
      logLevel: "debug",
    }),
  ],
};
