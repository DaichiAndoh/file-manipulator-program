const reverse = require('./commands/reverse');
const copy = require('./commands/copy');
const duplicateContents = require('./commands/duplicate-contents');
const replaceString = require('./commands/replace-string');

async function main() {
  const command = process.argv[2];

  switch (command) {
    case 'reverse':
      reverse(process.argv[3], process.argv[4]);
      break;
    case 'copy':
      copy(process.argv[3], process.argv[4]);
      break;
    case 'duplicate-contents':
      duplicateContents(process.argv[3], process.argv[4]);
      break;
    case 'replace-string':
      replaceString(process.argv[3], process.argv[4], process.argv[5]);
      break;
    default:
      throw new Error('コマンドが見つかりません。');
  }

  console.log(`${command}の実行が完了しました。`);
}

main().then(() => {
  console.log('プログラムを終了します。');
}).catch((err) => {
  console.log('エラーが発生しました。:', err);
});
