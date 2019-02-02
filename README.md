testcafe-e2e-sample
====
testcafeの実行サンプル

## Description
公式サイトのサンプルページを利用してのe2eテストサンプル。
テスト実行結果はreport/res.xmlに出力される。
スクリーンショットはscreenshotフォルダ以下にテスト実行日時、テストケース、ブラウザ毎に出力される。

## Usage
```
# ex) chromeを起動してテスト実行
npm run test:chrome
# ex) firefoxをヘッドレスモードで起動してテスト実行
npm run test:firefox:headless
# ex) インストールされているブラウザ全てを起動してテスト実行
npm run test:all
```
詳しくはpackage.jsonのscriptセクション参照

## Install
```
$ git clone https://github.com/wagawo/testcafe-e2e-sample.git
$ cd ./testcafe-e2e-sample
$ npm install
```

## Link
[TestCafe](https://devexpress.github.io/testcafe/)

## Licence
[MIT](https://github.com/tcnksm/tool/blob/master/LICENCE)