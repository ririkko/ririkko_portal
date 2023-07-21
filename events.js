// standfm処理用12月10日を基準とする
var start = new Date("2022-12-10");

// イベントごとに更新する
var target1 = new Date("2023-05-01");
var target2 = new Date("2023-05-14");
var target3 = new Date("2023-05-28");
var target4 = new Date("2023-06-24");
var target5 = new Date("2023-09-15");

// 今日の日付を取得
var today = new Date();

// ターゲットまでの残り時間を計算する関数
function calculateTimeRemaining(targetDate) {
  var timeRemaining = targetDate - today;
  if (timeRemaining < 0) {
    return null; // ターゲット日が過ぎている場合はnullを返す
  }

  var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  return {
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  };
}

// カウントダウンを表示する関数
function displayCountdown(targetDate) {
  var timeRemaining = calculateTimeRemaining(targetDate);

  if (!timeRemaining) {
    document.write("イベントはありません");
    return;
  }

  document.write("イベントまであと ");
  document.write(timeRemaining.days + " 日 ");
  document.write(timeRemaining.hours + " 時間 ");
  document.write(timeRemaining.minutes + " 分 ");
  document.write(timeRemaining.seconds + " 秒 ");
  document.write("です");
}

// 「standfmの日です」を表示する
if (today >= start && (today - start) % (14 * 24 * 60 * 60 * 1000) === 0) {
  document.write("standfmの日です");
}
// イベントごとのメッセージを表示する
else if (today.toDateString() === target1.toDateString()) {
  document.write("今日はFMおたる『Let'sゴージャスMonday!』に電話出演の日です");
} else if (today.toDateString() === target2.toDateString()) {
  document.write("今日はロハスフェスタの日です");
} else if (today.toDateString() === target3.toDateString()) {
  document.write("今日はRE:LIGHT FES2023の日です");
} else if (today.toDateString() === target4.toDateString()) {
  document.write("今日は【広島】香川裕光Birthday LIVE①〜香川裕光×ゆりめり2MAN LIVEの日です");
} else if (today.toDateString() === target5.toDateString()) {
  document.write("今日は待ちに待ったワンマンライブ！@青山月見ル君想フ の日です");
} else {
  // イベントがない場合はカウントダウンを表示する
  displayCountdown(target1); // ここを対象のイベントに応じて更新する
}
