//standfm処理用12月10日を基準とする
var start = new Date("2022-12-10");
//イベントごとに更新する
var target1 = new Date("2023-05-01");
var target2 = new Date("2023-05-14");
var target3 = new Date("2023-05-28");
var target4 = new Date("2023-06-24");
var target5 = new Date("2023-09-15");
//今日の日付を取得
var today = new Date();
// 「ヴァイナルミュージックの日です」を表示する
//if (today.getDay() === 4) {
// document.write("ヴァイナルミュージックの日です");
// }
// 「standfmの日です」を表示する
if (today >= start && (today - start) % (14 * 24 * 60 * 60 * 1000) === 0) {
  document.write("standfmの日です");
}
//ここはイベントごとに更新する
else if (today.toDateString() === target1.toDateString()) {
  document.write("今日はFMおたる『Let'sゴージャスMonday!』に電話出演の日です");
}
// 「「下北沢DY CUBE」でのスリーマンライブ出演」を表示する
else if (today.toDateString() === target2.toDateString()) {
  document.write("今日はロハスフェスタの日です");
}
// 「RE:LIGHT FES2023」を表示する
else if (today.toDateString() === target3.toDateString()) {
  document.write("今日はRE:LIGHT FES2023の日です");
}
// 「【広島】香川裕光Birthday LIVE①〜香川裕光×ゆりめり2MAN LIVE出演」を表示する
else if (today.toDateString() === target4.toDateString()) {
  document.write("今日は【広島】香川裕光Birthday LIVE①〜香川裕光×ゆりめり2MAN LIVEの日です");
}
else if (today.toDateString() === target5.toDateString()) {
  document.write("今日は待ちに待ったワンマンライブ！@青山月見ル君想フ の日です");
}
else {
  document.write("イベントはありません");
}
