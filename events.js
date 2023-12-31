// 今日の日付を日本時間で取得
var today = new Date();
var japanTime = today.toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" });
today = new Date(japanTime);

// ターゲットまでの残り時間を計算する関数
function calculateTimeRemaining(targetDate) {
  var timeRemaining = targetDate.getTime() - today.getTime(); // getTime()を使ってミリ秒単位の差分を計算
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
function displayCountdown(targetDate, message, isYoutubeEvent) {
  var timeRemaining = calculateTimeRemaining(targetDate);

  if (!timeRemaining) {
    document.write(message + "は終了しました");
    return;
  }

  document.write(message + "まであと ");
  if (isYoutubeEvent) {
    // Youtubeの公開は21時なので時間を修正
    timeRemaining.hours += 21;
  } else {
    // Podcastの開始は22時なので時間を修正
    timeRemaining.hours += 22;
  }
  document.write(timeRemaining.days + " 日 ");
  document.write(timeRemaining.hours + " 時間 ");
  document.write(timeRemaining.minutes + " 分 ");
  document.write(timeRemaining.seconds + " 秒 ");
  document.write("です<br>");
}

// イベントを生成する関数
function generateEvents(startDateStr, endDateStr, intervalInDays, eventName, isYoutubeEvent) {
  var events = [];
  var currentDate = new Date(startDateStr);

  while (currentDate.getTime() <= new Date(endDateStr).getTime()) {
    var eventDate = new Date(currentDate);
    if (isYoutubeEvent) {
      eventDate.setHours(21); // Youtubeの公開は21時 (日本時間)
    } else {
      eventDate.setHours(22); // Podcastの開始は22時 (日本時間)
    }
    events.push({
      date: eventDate,
      name: eventName,
      isYoutubeEvent: isYoutubeEvent
    });
    currentDate.setDate(currentDate.getDate() + intervalInDays); // 指定された間隔で設定
  }

  return events;
}

// Youtubeイベントを生成
var youtubeEvents = generateEvents("2024-01-05", "2025-12-31", 14, "Youtube公開", true);

// Podcastイベントを生成
var podcastEvents = generateEvents("2024-01-13", "2025-12-31", 14, "Podcast開始", false);

// すべてのイベントを結合
var allEvents = youtubeEvents.concat(podcastEvents);

// 直近のイベントのカウントダウンを表示
var closestEvent = null;
var closestEventTimeRemaining = Infinity;

for (var i = 0; i < allEvents.length; i++) {
  var timeRemaining = allEvents[i].date.getTime() - today.getTime();
  if (timeRemaining > 0 && timeRemaining < closestEventTimeRemaining) {
    closestEvent = allEvents[i];
    closestEventTimeRemaining = timeRemaining;
  }
}

if (closestEvent) {
  displayCountdown(closestEvent.date, "次の" + closestEvent.name, closestEvent.isYoutubeEvent);
} else {
  document.write("次のイベントはありません");
}
