window.addEventListener('DOMContentLoaded', 
  function() {
    let result = document.getElementById('result');
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition (
        finction(pos) {
          msg = `緯度 : ${pos.coords.latitude}<br />
                 経度 : ${pos.coords.longitude}<br />
                 方角 : ${pos.coords.heading}`;
          result.innerHTML = msg;
        },
        function(err) {
          let msgs = [
            '',
            'Geolocationの利用が許可されていません。',
            '位置情報を取得できません。',
            '位置情報の取得中にタイムアウトしました。'
          ];
          result.textContent = msgs[err.code];
        },
        {
          timeout : 7000,
          maximumAge : 500,
          enableHightAccuracy : false
        }
      );
    } else {
      window.alert('Geolpcation API に対応しているブラウザでアクセスしてください');
    }
  }, false
);