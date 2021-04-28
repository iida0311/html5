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
        }
      );
    } else {
      window.alert('Geolpcation API に対応しているブラウザでアクセスしてください');
    }
  }, false
);