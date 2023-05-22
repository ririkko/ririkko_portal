
    // index.htmlの読み込み完了時に実行される処理
    document.addEventListener("DOMContentLoaded", function() {
      var newsSection = document.getElementById("news-section");
    
      // Ajaxリクエストを使用してnews.htmlの内容を取得
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
            // 取得した内容をnewsSectionに挿入
            newsSection.innerHTML = xhr.responseText;
          } else {
            console.error("Failed to load news.html");
          }
        }
      };
      xhr.open("GET", "news.html", true);
      xhr.send();
    });
