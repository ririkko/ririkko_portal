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
function displayCountdown(targetDate, message) {
  var timeRemaining = calculateTimeRemaining(targetDate);

  if (!timeRemaining) {
    document.write(message + "は終了しました");
    return;
  }

  var countdownString = message + "まであと ";
  countdownString += timeRemaining.days + " 日 ";
  countdownString += timeRemaining.hours + " 時間 ";
  countdownString += timeRemaining.minutes + " 分 ";
  countdownString += timeRemaining.seconds + " 秒 ";

  document.write(countdownString);
}

// 「standfmの日です」を表示する
if (today >= start && (today - start) % (14 * 24 * 60 * 60 * 1000) === 0) {
  document.write("standfmの日です<br>");
}

// カウントダウンを1秒ごとに更新する関数
function updateCountdowns() {
  // ワンマンライブのカウントダウンを表示
  displayCountdown(target5, "待ちに待ったワンマンライブ！@青山月見ル君想フ の日は");

  // 直近のイベントのカウントダウンを表示
  var closestEvent = null;
  var closestEventTimeRemaining = Infinity;
  var closestEventMessage = "";

  if (today < target1) {
    closestEvent = target1;
    closestEventMessage = "FMおたる『Let'sゴージャスMonday!』に電話出演の日まで";
  } else if (today < target2) {
    closestEvent = target2;
    closestEventMessage = "ロハスフェスタまで";
  } else if (today < target3) {
    closestEvent = target3;
    closestEventMessage = "RE:LIGHT FES2023まで";
  } else if (today < target4) {
    closestEvent = target4;
    closestEventMessage = "【広島】香川裕光Birthday LIVE①〜香川裕光×ゆりめり2MAN LIVEの日まで";
  }

  if (closestEvent) {
    displayCountdown(closestEvent, closestEventMessage);
  } else {
    document.write("次のイベントはありません");
  }
}

// ページの読み込みが完了したらカウントダウンを開始します
document.addEventListener('DOMContentLoaded', function() {
  // 初回のカウントダウンを表示
  updateCountdowns();

  // 1秒ごとにカウントダウンを更新します
  setInterval(updateCountdowns, 1000);
});
