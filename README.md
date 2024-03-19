# file_manipulator_program &middot; ![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)

コマンドライン引数で指定されたコマンドを実行するプログラムです。
各コマンドはファイル操作を用いた処理を行います。

指定できるコマンドは以下です。

- reverse inputpath outputpath
  - inputpath にあるファイルを受け取り、outputpath に inputpath の内容を逆にした新しいファイルを作成します
- copy inputpath outputpath
  - inputpath にあるファイルのコピーを作成し、outputpath として保存します
- duplicate-contents inputpath n
  - inputpath にあるファイルの内容を読み込み、その内容を複製し、複製された内容を inputpath に n 回複製します
- replace-string inputpath needle newstring
  - inputpath にあるファイルの内容から文字列 'needle' を検索し、'needle' の全てを 'newstring' に置き換えます

## Usage

```
$ node src/index.js {command} {...args}

# reverse の場合
$ node src/index.js reverse inputpath outputpath
```
