# ワードプレス開発環境


## 初期化

```
$ npm i
```


## 開発環境立ち上げ

開発環境構築を立ち上げるには、DockerDesktop を起動する必要があります。

```
$ npm run dev
```


## port

開発環境構築のデフォルトのポートは、下記になります。

```
http://localhost:10011/
```


## SQLの管理

### SQLのデータを書き出す

WP のデータベースに更新がある場合は下記のコマンドを実行することで、sql ディレクトリに最新の情報を書き出せる。

```
$ npm run sql:export
```


### SQLのデータを上書きする

WP のデータベースの最新のものに更新するときは、下記のコマンドで sql ディレクトリの情報に上書きできる。

```
$ npm run sql:import
```


## 開発サーバー

```
http://localhost:3000（browserSync）
```


## 管理画面へのログイン

```
url: http://localhost:10011/wp-admin
id: admin
password: password
```


## テーマファイルについて

./my-theme ディレクトリの中身がWPの基本テーマになるので、こちらのフォルダで開発を行ってください。
フォルダ名の変更を行った場合は、package.json, ./my-theme/style.css, .wp-env.json, webpack.config.json を修正する必要があります。


## WP環境の立ち上げと停止

```
$npm run dev
```

wp-envのみを起動することもできます。詳しくは `$npm run` を実行して、使用出来るスクリプトをかくにんしてください。

```
$ npm run wp-env:start
```

開発環境を停止するには、下記のコマンドを実行してください。

```
$ npm run wp-env:stop
```


## WP環境のアップデート

.wp-env.json ファイルでプラグインの追加や php.ini の書き換えを行った際には、下記を実行することで開発環境に反映させることができる。

```
$ npm run wp-env:update
```
