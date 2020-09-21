TypeScriptの勉強リポジトリです。
少しずつ、型を覚える。

■TypeScript駆け足環境構築
① TypeScriptインストール
//グローバルにインストールする場合
＄npm install -g typescript

//ローカルにインストールする場合
＄npm install typescript --save-dev

特にこだわりがなければローカルインストールでいいかと思います。
＄npx tsc //ローカル環境ではnpxをつけて実行する。バージョンが確認できればok。

②tsconfig.jsonの作成
$ npx tsc --init　

③快適にコンパイルする準備、ts-node-devインストール
$ npm install ts-node-dev --save-dev

$ npx ts-node-dev --respawn src/hello-world.ts
Hello World!

④npm-scriptsに実行コマンドの追加
package.json
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "dev": "ts-node-dev --respawn"
}

$ npm run dev src/hello-world.ts
このコマンドで上記と同じ結果が出力されれば問題ありません。
