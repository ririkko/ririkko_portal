// ワンマンライブの日付と時間を設定します (18:00を指定)
var oneManLiveDate = new Date("2023-09-15 18:00");

// イベントごとに更新する
var targetEvents = [
  new Date("2023-05-01"),
  new Date("2023-05-14"),
  new Date("2023-05-28"),
  new Date("2023-06-24"),
];

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

  document.write(message + "まであと ");
  document.write(timeRemaining.days + " 日 ");
  document.write(timeRemaining.hours + " 時間 ");
  document.write(timeRemaining.minutes + " 分 ");
  document.write(timeRemaining.seconds + " 秒 ");
  document.write("です<br>");
}

// ワンマンライブのカウントダウンを表示
displayCountdown(oneManLiveDate, "待ちに待ったワンマンライブ！@青山月見ル君想フ");

// 直近のイベントのカウントダウンを表示
var closestEvent = null;
var closestEventTimeRemaining = Infinity;

for (var i = 0; i < targetEvents.length; i++) {
  var timeRemaining = targetEvents[i] - today;
  if (timeRemaining > 0 && timeRemaining < closestEventTimeRemaining) {
    closestEvent = targetEvents[i];
    closestEventTimeRemaining = timeRemaining;
  }
}

if (closestEvent) {
  displayCountdown(closestEvent, "次のイベント");
} else {
  document.write("次のイベントはありません");
}
